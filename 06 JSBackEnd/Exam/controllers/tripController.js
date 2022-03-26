const router = require("express").Router();
const { parseError } = require("../util/parser");
const { isUser } = require("../middlewares/guards");

router.get("/create", isUser(), (req, res) => {
  res.render("trip/create", { title: "Create Trip" });
});
router.post("/create", isUser(), async (req, res) => {
  try {
    const tripData = {
      startPoint: req.body.startPoint,
      endPoint: req.body.endPoint,
      date: req.body.date,
      time: req.body.time,
      carImageUrl: req.body.carImageUrl,
      carBrand: req.body.carBrand,
      seats: Number(req.body.seats),
      price: Number(req.body.price),
      description: req.body.description,
      author: req.user._id,
    };

    await req.storage.createTrip(tripData);
    res.redirect("/");
  } catch (err) {
    console.log(err.message);
    let errors;
    if (err.errors) {
      errors = Object.values(err.errors).map((e) => e.properties.message);
    } else {
      errors = [err.message];
    }
    const ctx = {
      errors: parseError(err),
      tripData: {
        startPoint: req.body.startPoint,
        endPoint: req.body.endPoint,
        date: req.body.date,
        time: req.body.time,
        carImageUrl: req.body.carImageUrl,
        carBrand: req.body.carBrand,
        seats: Number(req.body.seats),
        price: Number(req.body.price),
        description: req.body.description,
        author: req.user._id,
      },
    };
    res.render("trip/create", ctx);
  }
});

router.get("/shared", async (req, res) => {
  const trips = await req.storage.getAllTrips();
  res.render("trip/shared", { trips, title: "Shared Trips" });
});

router.get("/details/:id", async (req, res) => {
  try {
    const trip = await req.storage.getTripById(req.params.id);
    trip.hasUser = Boolean(req.user);
    trip.isAuthor = req.user && req.user._id == trip.author;
    trip.isJoined = req.user && trip.buddies.find((x) => x._id == req.user._id);
    trip.members = trip.buddies.join(", ");

    if (trip.seats < 1) {
      trip.isFull = true;
    }

    res.render("trip/details", { trip, title: "Details" });
  } catch (err) {
    console.log(err.message);
    console.log(err);
    res.redirect("/404");
  }
});

router.get("/delete/:id", isUser(), async (req, res) => {
  const trip = await req.storage.getTripById(req.params.id);

  try {
    if (trip.author != req.user._id) {
      throw new Error("Cannot delete trip you haven't created.");
    }
    await req.storage.deleteTrip(req.params.id);
    res.redirect("/");
  } catch (err) {
    console.log(err.message);
    res.redirect("/trip/details/" + req.params.id);
  }
});

router.get("/edit/:id", isUser(), async (req, res) => {
  try {
    const trip = await req.storage.getTripById(req.params.id);

    if (req.user._id != trip.author) {
      throw new Error("Cannot edit trip you haven't created.");
    }
    res.render("trip/edit", { trip });
  } catch (err) {
    console.log(err.message);
    res.redirect("/trip/details/" + req.params.id);
  }
});

router.post("/edit/:id", isUser(), async (req, res) => {
  try {
    const trip = await req.storage.getTripById(req.params.id);
    if (req.user._id != trip.author) {
      throw new Error("Cannot edit trip you haven't created.");
    }

    await req.storage.editTrip(req.params.id, req.body);
    res.redirect("/");
  } catch (err) {
    let errors;
    if (err.errors) {
      errors = Object.values(err.errors).map((e) => e.properties.message);
    } else {
      errors = [err.message];
    }

    const ctx = {
      errors: errors,
      trip: {
        startPoint: req.body.startPoint,
        endPoint: req.body.endPoint,
        date: req.body.date,
        time: req.body.time,
        carImageUrl: req.body.carImageUrl,
        carBrand: req.body.carBrand,
        seats: req.body.seats,
        price: req.body.price,
        description: req.body.description,
      },
    };
    res.render("trip/edit", ctx);
  }
});

router.get("/join/:id", isUser(), async (req, res) => {
  try {
    const trip = await req.storage.getTripById(req.params.id);

    if (trip.author == req.user._id) {
      throw new Error("Cannot join trip you have created.");
    }

    await req.storage.joinTrip(req.params.id, req.user._id);
    res.redirect("/trip/details/" + req.params.id);
  } catch (err) {
    console.log(err.message);
    res.redirect("/trip/details/" + req.params.id);
  }
});
module.exports = router;
