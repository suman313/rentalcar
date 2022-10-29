import mongoose from "mongoose";
import csvtojson from "csvtojson";
import Cardetails from "../models/cardetails.js";

export const getAllCars = async (req, res) => {
  try {
    const data = await Cardetails.find({}).limit(20);
    const priceRangeMin = await Cardetails.find().sort("rate").limit(1);
    const priceRangeMax = await Cardetails.find().sort("-rate").limit(1);
    const low = priceRangeMin[0].rate;
    const high = priceRangeMax[0].rate;
    res.status(200).json({ data, low, high });
  } catch (error) {
    res.json({ error });
  }
};

export const addCardetails = async (req, res) => {
  const jsonfile = await csvtojson().fromFile("Book1.csv");
  try {
    await Cardetails.insertMany(jsonfile);
    res.json({ success: "success" });
  } catch (error) {
    console.log(error);
  }
};

export const updateContact = async (req, res) => {
  const { id: _id } = req.params;
  const contact = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id))
      res.status(404).send("This is not a valid ID");
    const updatedContact = await Addressbook.findByIdAndUpdate(_id, contact, {
      new: true,
    });
    res.status(200).json(updatedContact);
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = async (req, res) => {
  const { id: _id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id))
      res.status(400).send("This is not a valid ID");
    await Addressbook.findByIdAndRemove(_id);
    res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const searchByContact = async (req, res) => {
  let { searchQuery } = req.query;
  console.log(searchQuery);
  // console.log(email);
  searchQuery = new RegExp(searchQuery, "i");
  try {
    const contacts = await Addressbook.find({
      $or: [{ name: searchQuery }, { email: searchQuery }],
    });
    res.json(contacts);
  } catch (error) {
    console.log(error);
  }
};
