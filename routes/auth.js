const express = require('express');
const { body } = require('express-validator');
const { signout, signup, signin, isSignedIn } = require('../controllers/auth');
const router = express.Router()


router.get("/signout",signout);

router.post("/signup",[
    body('firstName').isLength({min : 1}).withMessage("First name cannot be empty"),
    body('email').isEmail().withMessage("Email should be in valid format"),
    body('password').isLength({min : 5}).withMessage("Password should be atleast of length 5"),
],signup);


router.post("/signin",[
    body('email').isEmail().withMessage("Email should be in valid format"),
    body('password').isLength({min : 1}).withMessage("Password is required"),
],signin);

router.get("/testroute", isSignedIn,(req,res) => {
    res.json(req.auth);
})

module.exports = router;