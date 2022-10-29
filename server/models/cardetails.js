import mongoose from "mongoose";

const CardetailsSchema = mongoose.Schema({
  owner_id: {
    type: "Number",
  },
  car_name: {
    type: "String",
  },
  description: {
    type: "String",
  },
  car_model_year: {
    type: "Number",
  },
  car_brand: {
    type: "String",
  },
  color: {
    type: "String",
  },
  capacity: {
    type: "Number",
  },
  plate_no: {
    type: "String",
  },
  rate: {
    type: "Number",
  },
  status: {
    type: "Number",
  },
  image: {
    type: "String",
  },
});

const Cardetails = mongoose.model("cardetail", CardetailsSchema);

export default Cardetails;
