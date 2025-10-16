const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  getSingleBook,
  addBook,
  updateBook,
  deleteBook,
   getCartItems,
   addToCart,
   removeFromCart
} = require("../controller/bookcontroller"); // ✅ correct import

// ✅ Routes
router.get("/get", getAllBooks);
router.get("/get/:id", getSingleBook);
router.post("/add", addBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

router.get('/cart', getCartItems);                // Get all cart items
router.post('/cart', addToCart);                 // Add book to cart
router.delete('/cart/:id', removeFromCart);

module.exports = router;


