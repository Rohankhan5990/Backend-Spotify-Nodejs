const spotifyToken = async (req, res, next) => {
  const token = req.headers['authorization'];
  
  if (!token) {
    return res.status(401).json({ error: 'Spotify token missing from request headers' });
  }
  
  req.token = token.split(" ")[1];
  next(); // Don't forget to call next() to move to the next middleware or handler
};

module.exports = spotifyToken;
