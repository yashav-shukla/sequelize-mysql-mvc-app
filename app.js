const express = require("express");

const sequelize = require("./config/database");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(express.json());

app.use("/students", studentRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Database Connected");
    console.log("Table Created Successfully");

    app.listen(3000, () => {
      console.log("Server Running On Port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });