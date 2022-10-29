import mongoose from "mongoose";

const BookingSchema = mongoose.Schema({
  booking_ref_no: {
    type: "Number",
    default: Math.floor(Math.random() * 10000),
  },
  customer_name: {
    type: "String",
  },
  contact_no: {
    type: "Number",
  },
  email: {
    type: "String",
  },
  booking_date: {
    type: "Date",
    default: new Date(),
  },
  pickup_date: {
    type: "Date",
  },
  return_date: {
    type: "Date",
  },
  car_id: {
    type: "ObjectId",
  },
});

const BookingModel = mongoose.model("Bookingdetail", BookingSchema);

export default BookingModel;
