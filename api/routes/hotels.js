import express from 'express'
import { countByCity, countByType, createHotel, deletHotel, getAllHotels, getHotel, updateHotel, getHotelRooms } from '../controllers/hotel.js';
import { verifyToken, verifyUser, isAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// CREATE
router.post("/", isAdmin, createHotel)

// UPDATE
router.put("/:id",isAdmin, updateHotel)
// DELETE
router.delete("/:id",isAdmin, deletHotel)

// GET
router.get("/find/:id", getHotel)

// GET ALL
router.get("/", getAllHotels)


router.get("/countByCity", countByCity)
router.get("/countByType", countByType)
router.get("/room/:id", getHotelRooms)



export default router;