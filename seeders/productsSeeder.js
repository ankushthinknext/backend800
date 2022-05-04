import faker from "faker";
import connectDB from "../dbconn.js";
import dotenv from "dotenv";
import Product from "../models/Product.js";

function generateFakeProducts(limit) {
  let products = [];
  for (let i = 0; i < limit; i++) {
    let product = {};
    product.name = faker.commerce.productName();
    product.price = faker.commerce.price();
    product.description = faker.commerce.productDescription();
    product.inStock = faker.datatype.boolean();
    product.department = faker.commerce.department();
    products.push(product);
  }
  return products;
}

async function createFakeProducts(limit) {
  try {
    let products = generateFakeProducts(limit);
    let result = await Product.insertMany(products);
  } catch (error) {
    console.log(error.message);
  }
}

export default createFakeProducts;
