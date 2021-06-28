const tripService = require("../services/trip");

module.exports = () => (req, res, next) => {
  //   to do import and decorate services
  req.storage = {
    ...tripService,
  };
  next();
};
