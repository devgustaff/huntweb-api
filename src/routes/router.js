const { Router } = require("express");
const router = Router();
const ProductController = require("../controllers/ProductController");

router.get("/products", ProductController.index);
router.post("/products", ProductController.add);
router.get("/products/:id", ProductController.show);
router.put("/products/:id", ProductController.update);
router.delete("/products/:id", ProductController.destroy);

module.exports = router;
