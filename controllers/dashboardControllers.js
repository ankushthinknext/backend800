import User from "../models/User.js";
import Category from "../models/Category.js";
import Product from "../models/Product.js";
import Transaction from "../models/Transaction.js";
import moment from "moment";

async function getDashboardData(req, res) {
  try {
    let products = await Product.find({}).count();
    let users = await User.find({ role: "User" }).count();
    let categories = await Category.find({}).count();
    let transactions = await Transaction.find().count();
    let recentTransaction = await Transaction.find({
      createdAt: { $gt: moment().startOf("day").subtract(1, "day") },
    }).sort({ createdAt: -1 });
    res
      .status(200)
      .send({ products, users, transactions, categories, recentTransaction });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export { getDashboardData };
