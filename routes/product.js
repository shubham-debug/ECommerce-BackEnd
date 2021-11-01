const express = require("express");
const router = express.Router();

const {isAdmin,isSignedIn,isAutheticated} = require("../controllers/auth");
const {getUserById} = require("../controllers/user");
const {createProduct,getProductById,getProduct,photo,updateProduct,deleteProduct,getAllProduct,getAllUniqueCategories} = require("../controllers/product");

// all params
router.param("userId",getUserById);
router.param("productId",getProductById);

// all routes

// create routes
router.post("/product/create/:userId",isSignedIn,isAutheticated,isAdmin,createProduct)

// read routes
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId",photo);

// update routes
router.put("/product/:produtId/:userId",isSignedIn,isAutheticated,isAdmin,updateProduct);

// delete routes
router.delete("/product/:produtId/:userId",isSignedIn,isAutheticated,isAdmin,deleteProduct);

// listing routes
router.get("/products", getAllProduct);

router.get("/product/categories",getAllUniqueCategories);

module.exports = router;