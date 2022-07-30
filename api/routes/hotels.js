import express from 'express'

const router = express.Router();

// CREATE
router.post("/", (req, res) => {
    res.send("Hello, this is hotels endpoit")
})


export default router;