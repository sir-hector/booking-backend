import express from 'express'
import { createHotel, deletHotel, getAllHotels, getHotel, updateHotel } from '../controllers/hotel.js';
import { verifyToken, verifyUser, isAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// CREATE
router.post("/", isAdmin, createHotel)

// UPDATE
router.put("/:id",isAdmin, updateHotel)
// DELETE
router.delete("/:id",isAdmin, deletHotel)

// GET
router.get("/:id", getHotel)

// GET ALL
router.get("/", getAllHotels)


export default router;