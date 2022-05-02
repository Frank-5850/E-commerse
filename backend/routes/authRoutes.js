const router = require("express").Router();
const { findUserById, updateUserPassword } = require("../controllers/user");
const {
  register,
  login,
  logout,
  isAuth,
  deleteUser,
} = require("../controllers/auth");

// router.get("/test", (req, res) => {
//   res.send("Hello");
// });
router.post("/register", register);
router.post("/login", login);
router.post("/updatePassword/:userId", isAuth, updateUserPassword);
router.get("/logout", logout);
router.delete("/user/delete/:userId", isAuth, deleteUser);

router.param("userId", findUserById);

module.exports = router;
