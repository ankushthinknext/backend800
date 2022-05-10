import mongoose from "mongoose";

const schema = new mongoose.Schema({
  products: { type: Array },
  subTotal: { type: Number },
  discount: { type: Number },
  grandTotal: { type: Number },
});

export default new mongoose.model("transactions", schema);
