const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcrypt");


router.post("/register" ,async (req, res) => {
    try { 
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            user: req.body.username,
            email: req.body.email,
            password: hashedPass,
        })
    } catch(error) {
        console.log(error)
    }
})
module.exports = router