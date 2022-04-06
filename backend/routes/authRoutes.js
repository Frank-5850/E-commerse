const router = require("express").Router();
const { register, login, logout } = require("../controllers/auth");

// router.get("/test", (req, res) => {
//   res.send("Hello");
// });
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
