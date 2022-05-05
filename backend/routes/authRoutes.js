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
router.get("/logout", logout);
router.put("/user/updatePassword/:userId", isAuth, updateUserPassword);

// Still need to complete in front-end
router.delete("/user/delete/:userId", isAuth, deleteUser);

router.param("userId", findUserById);

module.exports = router;
