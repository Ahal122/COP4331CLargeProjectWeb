const app_name = "myculinarycompass-0c8901cce626";
exports.buildPath = function buildPath(route) {
  if (process.env.NODE_ENV === "production") {
    return "https://" + app_name + ".herokuapp.com/" + route;
  } else {
    return "http://localhost:5000/" + route;
  }
};
