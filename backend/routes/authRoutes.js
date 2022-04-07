const router = require("express").Router();
const { findUserById } = require("../controllers/user");
const {
  register,
  login,
  logout,
  isAuth,
  remove,
} = require("../controllers/auth");

// router.get("/test", (req, res) => {
//   res.send("Hello");
// });
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.delete("/delete/:userId", isAuth, remove);

router.param("userId", findUserById);

module.exports = router;
