const router = require("express").Router();
const { register } = require("../controllers/auth");

// router.get("/test", (req, res) => {
//   res.send("Hello");
// });
router.post("/register", register);

module.exports = router;
