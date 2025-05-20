const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
require("dotenv").config();
require("./config/passport");

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ Mongo error:", err));

// Middleware
app.use(session({
  secret: "your-secret",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get("/", (req, res) => res.send("Home Page"));

app.get("/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.send("🎉 Logged in with Google!");
  }
);

app.get("/logout", (req, res) => {
  req.logout(() => {
    res.send("👋 Logged out");
  });
});

// Start server
app.listen(5000, () => console.log("🚀 Server started on http://localhost:5000"));
