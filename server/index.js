require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const User = require("./models/User");
const adminRoutes = require("./routes/admin");
const authRoutes = require("./routes/authentication");

//db Connection
const dbUrl = process.env.DB_URL;
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Connection to Database failed!");
    console.log(error);
  });

const secret = process.env.SESSION_SECRET;

const store = MongoStore.create({
  mongoUrl: dbUrl,
  ttl: 24 * 60 * 60,
  crypto: {
    secret,
  },
});

const sessionConfig = {
  store,
  name: "session",
  secret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    // secure: true,
    sameSite: "None",
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

//middlewares
app.use(
  cors({
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//routes
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);

//dev debug checks
app.get("/", (req, res) => {
  console.log(req.user);
  res.send(req.user);
});

app.get("/fakeUser", async (req, res) => {
  const user = new User({
    username: "abc",
    email: "abc@abc.com",
    role: "student",
    officialId: "abc",
  });
  const newUser = await User.register(user, "abc");

  req.login(newUser, (err) => {
    if (err) res.status(500).json({ message: `Error loggin in user: ${e}` });
    else res.status(201).json({ message: "User logged in successfully!" });
  });
});

app.all("*", (req, res, next) => {
  res.status(404).json({ message: "404! Page not found!" });
});

//connection
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
