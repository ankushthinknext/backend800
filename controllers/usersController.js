import User from "../models/User.js";
import bcrypt from "bcrypt";

async function createUser(req, res) {
  try {
    let { name, email, password } = req.body;

    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);
    let result = await User.create({
      name,
      email,
      password: hash,
    });
    res.status(201).send({
      success: true,
      result: {
        name: result.name,
        email: result.email,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export { createUser };
