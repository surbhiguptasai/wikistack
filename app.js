const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const layout = require("./views/layout.js");
const { db, Page, User } = require("./models");
const models = require("./models");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./stylesheets")));

app.get("/", (req, res, next) => {
  res.send(layout());
});
db.authenticate().then(() => {
  console.log("connected to the database");
});
models.db.sync({ force: true });

const init = async () => {
  try {
    await models.db.sync();
    server.listen(PORT, () => {
      console.log(`Server listening in port ${PORT}`);
    });
  } catch (error) {
    next(error);
  }
};
const init1 = async () => {
  try {
    await models.User.sync();
    await models.Page.sync();
    app.listen(PORT, () => {
      console.log(`App listening in port ${PORT}`);
    });
  } catch (error) {
    next(error);
  }
};
// init();
// init1();
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
