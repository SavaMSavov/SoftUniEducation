const playService = require("../services/play");

module.exports = () => (req, res, next) => {
  //   to do import and decorate services
  req.storage = { ...playService };
  next();
};
