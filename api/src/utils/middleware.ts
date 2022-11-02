// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const requestLogger = (req: any, res: any, next: any) => {
  console.log("Method:", req.method);
  console.log("Path:  ", req.path);
  console.log("Body:  ", req.body);
  console.log("---");
  next();
};

module.exports = {
  requestLogger,
};
