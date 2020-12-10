const mongoose = require("mongoose");
mongoose.Promise = Promise;

mongoose
  .connect("mongodb://0.0.0.0/saasify", { useNewUrlParser: true })
  .then(() => {
    console.log("SUCCESS: DB connection ");
  })
  .catch((err) => {
    console.log("ERROR: DB connection ");
    console.log("err ", err);
  });
