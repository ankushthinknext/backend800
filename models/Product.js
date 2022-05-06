import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, minlength: 3, maxlength: 200, required: true },
  price: { type: Number, min: 0.01, max: 100000000, required: true },
  description: { type: String, minlength: 3, maxlength: 500 },
  images: { type: Array },
  inStock: { type: Boolean },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
  department: { type: String, minlength: 3, maxlength: 50 },
});

export default new mongoose.model("products", productSchema);
