const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
const userController = require("../controllers/user.js");

router.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup));

router.route("/login")
.get( userController.renderLoginForm)
// passport.authenticate() is a middleware used for authentication.
.post( saveRedirectUrl, passport.authenticate("local", 
    {failureRedirect : "/login", 
        failureFlash : true}), userController.login);


// logout
router.get("/logout", userController.logut);

module.exports = router;
