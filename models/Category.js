import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true,
    unique: true,
  },
});

export default new mongoose.model("categories", schema);
