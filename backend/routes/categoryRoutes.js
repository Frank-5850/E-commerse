const router = require("express").Router();

const { isAuth, isAdmin } = require("../controllers/auth");
const {
  createCategory,
  findCategoryById,
  readCategory,
  updateCategory,
} = require("../controllers/category");
const { findUserById } = require("../controllers/user");

router.post("/category/create/:userId", isAuth, isAdmin, createCategory);
router.get("/category/:categoryId", readCategory);
router.put(
  "/category/update/:categoryId/:userId",
  isAuth,
  isAdmin,
  updateCategory
);

router.param("userId", findUserById);
router.param("categoryId", findCategoryById);

module.exports = router;
