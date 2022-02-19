const MAX_LIMIT = 10;

module.exports = async (req, res, next) => {
  try {
    const {
      query: { limit, offset },
    } = req;
    req.pagination = {
      limit: limit <= 0 || limit > MAX_LIMIT ? MAX_LIMIT : limit,
      offset: offset <= 0 ? 0 : offset,
    };
    next();
  } catch (error) {
    next(error)
  }
};
