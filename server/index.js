const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");

//db Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/smartsphere")
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Connection to Database failed!");
    console.log(error);
  });

//middlewares
app.use(cors());

//routes
app.use("/admin", adminRouter);

//connection
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
