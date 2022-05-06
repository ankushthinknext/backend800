import Category from "../models/Category.js";

/**
 * @method POST
 * @param {*} req
 * @param {*} res
 * @endpoint /categories
 */
async function createCategory(req, res) {
  try {
    let { name } = req.body;
    let result = await Category.create({ name });
    res.status(201).send({ success: true, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getCategories(req, res) {
  try {
    let result = await Category.find();
    res.status(200).send({ success: true, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getCategory(req, res) {
  try {
    let result = await Category.find({ _id: req.params.id });
    res.status(200).send({ success: true, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export { createCategory, getCategories, getCategory };
