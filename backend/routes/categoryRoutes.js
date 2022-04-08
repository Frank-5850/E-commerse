const router = require("express").Router();

const { isAuth, isAdmin } = require("../controllers/auth");
const {
  createCategory,
  findCategoryById,
  readCategory,
} = require("../controllers/category");
const { findUserById } = require("../controllers/user");

router.post("/category/create/:userId", isAuth, isAdmin, createCategory);
router.get("/category/:categoryId", readCategory);

router.param("userId", findUserById);
router.param("categoryId", findCategoryById);

module.exports = router;
