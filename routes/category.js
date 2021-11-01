const express = require("express");
const router = express.Router();

const {getCategoryById, createCategory, getCategory, getAllCategory, updateCategory, removeCategory} = require("../controllers/category");
const {isAdmin,isSignedIn,isAutheticated} = require("../controllers/auth");
const {getUserById} = require("../controllers/user");

// params
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

// create routes
router.post("/category/create/:userId", 
isSignedIn, 
isAutheticated, 
isAdmin, 
createCategory);

// read routes
router.get("/category/:categoryId",getCategory);
router.get("/categories",getAllCategory);


// update routes
router.put("/category/:categoryId/:userId", 
isSignedIn, 
isAutheticated, 
isAdmin, 
updateCategory);

// delete routes
router.delete("/category/:categoryId/:userId", 
isSignedIn, 
isAutheticated, 
isAdmin, 
removeCategory);





module.exports = router;