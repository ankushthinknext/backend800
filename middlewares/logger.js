function logger(req, res, next) {
  console.log(
    `METHOD = ${req.method} URL=${req.baseUrl}, HOST_NAME= ${req.hostname}`,
  );
  next();
}

export { logger };
