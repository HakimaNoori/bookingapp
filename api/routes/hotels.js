import express from "express";
import Hotel from "../models/Hotel.js";
import createError from "../utils/error.js";

import {
  createHotel,
  deleteHotel,
  updateHotel,
  getHotel,
  getHotels,
  countByCity,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
// router.post("/", async (req, res) => {
//   const newHotel = new Hotel(req.body);
//   try {
//     const savedHotel = await newHotel.save();
//     res.status(200).json(savedHotel);
//   } catch (err) {
//     next(err);
//     // res.status(500).json(err);
//   }
// });

// // UPDATE
// router.put("/:id", async (req, res) => {
//   const newHotel = new Hotel(req.body);
//   try {
//     const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {
//       $set: req.body,
//     });
//     res.status(200).json(updateHotel);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // DELETE

// router.delete("/:id", async (req, res) => {
//   try {
//     await Hotel.findByIdAndUpdate(req.params.id);
//     res.status(200).json("Hotel has been deleted.");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // GET

// router.get("/", async (req, res, next) => {
//   try {
//     const hotels = await Hotel.find();
//     res.status(200).json(hotels);
//   } catch (err) {
//     next(err);
//   }
// });

// // GET ALL
// router.get("/", async (req, res, next) => {
//   const failed = true;
//   const err = new Error();
//   err.status = 404;
//   err.message = "Hotels not found";
//   if (failed) return next(createError(404, "Hotels not found")); 

//   try {
//     const hotels = await Hotel.find();
//     res.status(200).json(hotels);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// CREATE
router.post("/", verifyAdmin,createHotel);
// UPDATE
router.put("/:id", verifyAdmin,updateHotel);
// DELETE
router.delete("/:id",verifyAdmin, deleteHotel);
// GET
router.get("/:id", getHotel);
// GET ALL
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", getHotels);

export default router;
