import Product from "../models/Product.js";
import cloudinaryUploader from "../config/cloudinaryConfig.js";

async function createProduct(req, res) {
  try {
    const fileUrls = [];
    if (req.files) {
      for (let file of req.files) {
        let result = await cloudinaryUploader.uploader.upload(file.path);
        fileUrls.push(result.secure_url);
      }
    }
    let result = await Product.create({ ...req.body, images: fileUrls });
    res.status(201).send({ result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getProducts(req, res) {
  let { limit, page, sortBy, sortOrder } = req.query;
  try {
    let count = await Product.find().count();
    let result = await Product.find()
      .populate("category")
      .sort({ [sortBy]: sortOrder || 1 })
      .limit(limit || 10)
      .skip(parseInt(page) * limit);
    res.status(200).send({ totalRecords: count, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getProduct(req, res) {
  try {
    let result = await Product.findById(req.params.id).populate("category");
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function updateProduct(req, res) {
  console.log(req.body);
  try {
    let result = await Product.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
    );
    res.status(200).send("Product Updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function deleteProduct(req, res) {
  try {
    let result = await Product.deleteOne({ _id: req.params.id });
    res.status(200).send("Product deleted!");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export { createProduct, getProducts, getProduct, deleteProduct, updateProduct };
