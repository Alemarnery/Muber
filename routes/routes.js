const DriversController = require("../controllers/drivers_controller");

module.exports = (app) => {
  //Watch for incoming request of method GET
  //to the route http://localhost:3050/api
  app.get("/api", DriversController.greeting);
  //apis!

  app.post("/api/drivers", DriversController.create);
};
