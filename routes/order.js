const express = require("express");
const router = express.Router();


const {isAdmin,isSignedIn,isAutheticated} = require("../controllers/auth");
const {getUserById, pushOrderInPurchaseList} = require("../controllers/user");
const {getOrderById, createOrder, getAllOrders,updateStatus,getOrderStatus} = require("../controllers/order");
const {updateStock} = require("../controllers/product");

// params
router.param("userId",getUserById);
router.param("orderId",getOrderById);


// actual routes
// create routes
router.post("/order/create/:userId", 
    isSignedIn, 
    isAutheticated,
    pushOrderInPurchaseList,
    updateStock, 
    createOrder
);

// read routes
router.get("/order/all/:userId", isSignedIn,isAutheticated,isAdmin,getAllOrders);

// status of order
router.get("/order/status/:userId",
    isSignedIn,
    isAutheticated,
    isAdmin,
    getOrderStatus
);


router.put("/order/:orderId/status/:userId",
    isSignedIn,
    isAutheticated,
    isAdmin,
    updateStatus
);


module.exports = router;