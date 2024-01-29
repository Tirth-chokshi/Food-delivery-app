import express from "express";
import { User } from './../models/User.js'
import { body, validationResult } from "express-validator";
const router = express.Router()

export default router.post('/newuser',
    //vailidation
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password','Incorrect Password').isLength({ min: 5 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            await User.create({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
                location: req.body.location
            })
            res.json({ success: true })
        } catch (error) {
            console.log(error)
            res.json({ success: false })
        }
    })
