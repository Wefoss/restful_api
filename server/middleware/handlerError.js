module.exports.handlerError = (err, req, res, next) => {
  const currentError = err.status || 500;
  res.status(currentError).send({
    error: [{ message: err.message || "Internal Server Error" }],
  });
};
