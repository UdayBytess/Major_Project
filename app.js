if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const listingRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

// To setup ejs
const path = require("path");
// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl = process.env.ATLASDB_URL;

main()
    .then(() => {
        console.log("connect to DB");
    })    
    .catch(err => console.log(err));
    
async function main() {
  await mongoose.connect(dbUrl);
}

// setting ejs template
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// To parse all req data
app.use(express.urlencoded({extended: true}));
// To use methodOverride
app.use(methodOverride("_method"));
// boiler-template with help of ejs-mate package.
app.engine('ejs', ejsMate);
// To use static files
app.use(express.static(path.join(__dirname, "/public")));

const store = MongoStore.create({
    mongoUrl : dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    // does'nt need to update session
    touchAfter : 24*3600
});

store.on("error", () => {
    console.log("ERROR in MONGO SESSION STORE", err);
})

const sessionOptions = {
    store,
    secret : process.env.SECRET,
    resave : true,
    saveUninitialized : false,
    cookie : {
        expires : Date.now() + 7*24*60*60*1000,
        maxAge : 7*24*60*60*1000,
        httpOnly : true,
    }
};

// using session
app.use(session(sessionOptions));
// use flash before the routes
app.use(flash());
// initialize passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})

// express router implementation
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/listings", listingRouter);
app.use("/", userRouter);


// If page is not found
// Catch-all 404 handler (matches everything)
app.use((req, res, next) => {
    next(new ExpressError(404, "Page not found!"));
});

// Custom handler function
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong" } = err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("listings/Error", {err});
});


app.listen(8080, () => {
    console.log(`server is listening at port ${8080}`);
})