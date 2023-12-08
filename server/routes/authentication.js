const router = require("express").Router();
const passport = require("passport");
const User = require("../models/User");

router.post("/signup", async (req, res) => {
  try {
    const { username, email, role, officialId, password } = req.body;
    console.log(req.body);
    const user = new User({ username, email, role, officialId });
    const newUser = await User.register(user, password);
    res.status(201).json({ message: "User registered" });
  } catch (e) {
    res.status(400).json({ message: `Error registering user: ${e.message}` });
  }
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).json({ message: "User logged in" });
});

router.get("/checkAuth", (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json("User is logged in");
  } else {
    res.status(401).json("No user is logged in");
  }
});

router.get("/logout", (req, res, next) => {
  console.log(req.user);
  if (req.user) {
    req.logout(function (err) {
      if (err) {
        return res
          .status(500)
          .json({ message: `Error logging out user: ${err.message}` });
      } else res.status(200).json({ message: "User logged out" });
    });
  } else res.status(200).json({ message: "No user to log out" });
});
module.exports = router;
