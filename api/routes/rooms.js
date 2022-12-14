import express from 'express'
import { createRoom, updateRoom, deleteRoom, getRoom, getAllRoom, updateRoomAvailability } from '../controllers/room.js';
import { verifyToken, verifyUser, isAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// CREATE
router.post("/:hotelid", isAdmin, createRoom)

// UPDATE
router.put("/:id",isAdmin, updateRoom)

// UPDATE AVAILABILITY 
router.put("/availability/:id", updateRoomAvailability)

// DELETE
router.delete("/:id/:hotelid",isAdmin, deleteRoom)

// GET
router.get("/:id", getRoom)

// GET ALL
router.get("/", getAllRoom)

export default router;