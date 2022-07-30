import express from 'express'
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/user.js';
import { verifyToken, verifyUser, isAdmin } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/checkauthentication', verifyToken, (req, res, next) => {
    res.send("hello user, you are logged in")
})

router.get('/checkuser/:id', verifyUser, (req, res, next) => {
    res.send("hello user, you are logged in and you can delete you account")
})

router.get('/checkadmin/', isAdmin, (req, res, next) => {
    res.send("hello admin, you are logged in and you can delete you account")
})
// UPDATE
router.put("/:id", verifyUser, updateUser)
// DELETE
router.delete("/:id",verifyUser, deleteUser)

// GET
router.get("/:id",verifyUser, getUser)

// GET ALL
router.get("/",isAdmin, getAllUsers)


export default router;