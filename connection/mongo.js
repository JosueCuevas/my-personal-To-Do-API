const mongoose = require("mongoose");
let connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: process.env.DB,
};

mongoose
  .connect(process.env.MONGO_URI, connectOptions)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error(err);
  });

process.on("uncaughtException", () => {
  mongoose.disconnect();
});
