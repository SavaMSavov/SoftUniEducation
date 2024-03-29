const mongoose = require("mongoose");

const { DB_CONNECTION_STRING } = require("../config/index");

module.exports = (app) => {
  return new Promise((resolve, reject) => {
    mongoose.connect(DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.on("error", (err) => {
      console.error("Database error: ", err.message);
      reject(err.message);
    });
    db.on("open", () => {
      console.log("Database connected");
      resolve();
    });
  });
};
