import Transaction from "../models/Transaction.js";

async function createTransaction(req, res) {
  try {
    let result = await Transaction.create(req.body);
    res.status(201).send({ success: "true", result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getTransactions(req, res) {
  try {
    let result = await Transaction.find({});
    res.status(200).send({ sucess: "true", result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getTransaction(req, res) {
  try {
    let result = await Transaction.find({ _id: req.params.id });
    res.status(200).send({ sucess: "true", result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export { createTransaction, getTransaction, getTransactions };
