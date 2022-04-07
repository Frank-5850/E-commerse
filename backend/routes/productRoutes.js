const { isAuth, isAdmin } = require("../controllers/auth");
const { createProduct } = require("../controllers/product");
const { findUserById } = require("../controllers/user");
const upload = require("../middlewares/photoMiddleware");

const router = require("express").Router();

router.post(
  "/product/create/:userId",
  isAuth,
  isAdmin,
  upload.single("photo"),
  createProduct
);

router.param("userId", findUserById);

module.exports = router;
