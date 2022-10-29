import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {
  addCardetails,
  deleteContact,
  getAllCars,
  searchByContact,
  updateContact,
} from "../controllers/cardetails.js";
import userLogin from "../controllers/Auth.js";

dotenv.config();

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   if (token == null) return res.sendStatus(401);
//   jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// }

const router = express.Router();

router.get("/", getAllCars);
router.get("/add", addCardetails);
// router.post("/search", authenticateToken, searchByContact);
// router.patch("/update/:id", authenticateToken, updateContact);
// router.delete("/:id", authenticateToken, deleteContact);
// router.post("/login/:username", userLogin);

export default router;
