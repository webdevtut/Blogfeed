const { clearHash } = require('../services/cache');


module.exports = async (req, res, next) => {
  await next(); // Trick to Execute middleware after execution of RouteHandling Function

  clearHash(req.user.id);

};
