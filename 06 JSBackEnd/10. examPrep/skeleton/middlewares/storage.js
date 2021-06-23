const hotel = require("../services/hotel");

module.exports = () => (req, res, next) => {
  //   to do import and decorate services
  req.storage = {
    ...hotel,
  };
  next();
};
