const express = require("express");
const router = express.Router();

// Register route
router.post("/register", (req, res) => {
  res.json({
    success: true,
    message: "Register route"
  });
});

module.exports = router;


/**
 * 
 * This should ONLY exist once, in index.js
Never create app inside routes.

2️⃣ router is not being exported

You created a router but never exported it.

3️⃣ Duplicate /profile route

You wrote /profile twice, once inside and once outside.

4️⃣ Routes & server logic are mixed

Industry rule:

index.js → server + middleware

routes/*.js → only routes
 
 */