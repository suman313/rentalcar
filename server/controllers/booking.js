import mongoose from "mongoose";
import BookingModel from "../models/bookings.js";

export const createBooking = async (req, res) => {
  const bookingDetails = req.body;
  const createNewBooking = new BookingModel({ ...bookingDetails });
  try {
    await createNewBooking.save();
    res.status(201).json(createNewBooking);
  } catch (error) {
    res.status(409).json({ error: error });
  }
};
