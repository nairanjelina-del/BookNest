const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // token comes from header
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({ message: "No token, access denied" });
    }

    // token format: Bearer <token>
    const actualToken = token.replace("Bearer ", "");

    const decoded = jwt.verify(actualToken, "secretkey");

    // store user info inside request
    req.user = decoded;

    next(); // move to next function (route controller)
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;