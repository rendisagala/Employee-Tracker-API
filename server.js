const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./src/routes/routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/v1/employee", routes);

app.listen(3000, () => {
  console.log(`Server is running!`);
});
