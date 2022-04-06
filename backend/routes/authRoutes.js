const router = require("express").Router();
const { register, login } = require("../controllers/auth");

// router.get("/test", (req, res) => {
//   res.send("Hello");
// });
router.post("/register", register);
router.post("/login", login);

module.exports = router;
