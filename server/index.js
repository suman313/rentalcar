import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import carsRouter from "./routes/carsroutes.js";
import bookingRouter from "./routes/bookings.js";
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/cars", carsRouter);
app.use("/booking", bookingRouter);
//MongoDB connection url

// define the port number where the server will run
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`This server is running on server ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
