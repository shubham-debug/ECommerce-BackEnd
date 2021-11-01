const express = require("express");
const router = express.Router();

const { getUserById, getUser, updateUser, userPurchaseList} = require("../controllers/user");
const { isSignedIn, isAutheticated } = require("../controllers/auth");
 
router.param("userId", getUserById);

router.get("/user/:userId",isSignedIn, isAutheticated, getUser);

router.put("/user/:userId", isSignedIn, isAutheticated, updateUser);

router.get("/orders/user/:userId", isSignedIn, isAutheticated, userPurchaseList);

module.exports = router;