const router = require("express").Router();

const { isAuth, isAdmin } = require("../controllers/auth");
const { createCategory } = require("../controllers/category");
const { findUserById } = require("../controllers/user");

router.post("/category/create/:userId", isAuth, isAdmin, createCategory);

router.param("userId", findUserById);

module.exports = router;
