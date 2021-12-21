const express = require('express');
const authController = require('../controllers/authController');
const validateToken = require('../middlewares/validateToken');


const router = express.Router();

router.route("/signup").post(authController.signUp);
router.route("/login").post(authController.login);
router.route("/tokentest").get(validateToken, authController.tokenWorks)


module.exports = router;