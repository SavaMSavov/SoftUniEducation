module.exports = () => (req, res, next) => {
  //   to do import and decorate services
  req.storage = {};  next();
};
