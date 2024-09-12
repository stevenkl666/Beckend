import { response } from "express";
import { Sequelize } from "sequelize";
import User from "../models/UserModel.js";
// import User from "../models/userControler.js";

export const getUser = async (req, res) => {
  try {
    const data = await User.findAll();
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const creteData = await Admin.create({ name, email, password });
    res.send(creteData);
  } catch (err) {
    res.send(createUser);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const data = await User.update(
      { name, email, password },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send(data);
  } catch (err) {
    res.send(err);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await User.destroy({ where: { id } });
    res.status(200).json({ message: "data dihapus" });
  } catch (err) {
    res.send(err);
  }
};
