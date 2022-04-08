const { isAuth, isAdmin } = require("../controllers/auth");
const {
  createProduct,
  findProductById,
  readProduct,
} = require("../controllers/product");
const { findUserById } = require("../controllers/user");
const { upload } = require("../middlewares/photoMiddleware");

const router = require("express").Router();

router.post(
  "/product/create/:userId",
  isAuth,
  isAdmin,
  upload.single("photo"),
  createProduct
);

router.get("/product/:productId", findProductById, readProduct);

router.param("userId", findUserById);
router.param("productId", findProductById);

module.exports = router;
