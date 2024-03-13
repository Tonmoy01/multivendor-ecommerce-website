const jwt = require('jsonwebtoken');

module.exports.authMiddleware = async (req, res, next) => {
  const { access_token } = req.cookies;

  if (!access_token) {
    return res.status(409).json({ error: 'Please login first' });
  } else {
    try {
      const deCodeToken = await jwt.verify(access_token, process.env.SECRET);

      req.role = deCodeToken.role;
      req.id = deCodeToken.id;

      next();
    } catch (error) {
      return res.status(409).json({ error: 'Please login' });
    }
  }
};
