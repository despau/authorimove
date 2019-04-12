var express     =   require("express"),
app         =   express(),
path        = require("path"),
bodyParser  =   require("body-parser"),
mongoose    =   require("mongoose"),
passport    =   require("passport"),
LocalStrategy = require("passport-local"),
methodOverride = require("method-override"),
Fake         = require("faker"),
// seedDB       = require("./seeds"),
// Load         = require("./models/load"),
// Truck         = require("./models/truck"),
    User        =   require("./models/user");

//requiring routes
var indexRoutes = require("./routes/index");
    // carrierRoutes = require("./routes/carrier"),
    // brokerRoutes = require("./routes/broker");


mongoose.connect("mongodb://localhost/authorimove");
 
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.use(methodOverride("_method"));
//seedDB(); //seed the database



app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
 });


app.use(require("express-session")({
    secret: "!t7is%,will$4tre#(if-@b+yral9",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//dictate the route paths
app.use("/", indexRoutes);
// app.use("/carrier", carrierRoutes);
// app.use("/broker", brokerRoutes);

app.listen("3000", "localhost", ()=> {
    console.log("authorimove app has started successfully");
});