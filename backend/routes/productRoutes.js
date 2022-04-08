const router = require("express").Router();
const { isAuth, isAdmin } = require("../controllers/auth");
const {
  createProduct,
  findProductById,
  readProduct,
  removeProduct,
} = require("../controllers/product");
const { findUserById } = require("../controllers/user");
const { upload } = require("../middlewares/photoMiddleware");

router.post(
  "/product/create/:userId",
  isAuth,
  isAdmin,
  upload.single("photo"),
  createProduct
);
router.delete("/product/:productId/:userId", isAuth, isAdmin, removeProduct);

router.get("/product/:productId", findProductById, readProduct);

router.param("userId", findUserById);
router.param("productId", findProductById);

module.exports = router;
