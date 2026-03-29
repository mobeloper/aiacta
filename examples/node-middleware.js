module.exports = function aiactaMiddleware(req, res, next) {
  res.setHeader("X-AIACTA-Owner", "Example Inc.");
  res.setHeader("X-AIACTA-Content-ID", "article-123");
  next();
};
