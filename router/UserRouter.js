import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controller/userControler.js";
const RouterUser = express.Router();

RouterUser.get("/getUser", getUser);
RouterUser.post("/createUser", createUser);
RouterUser.put("/updateUser/:id", updateUser);
RouterUser.delete("/deleteUser/:id", deleteUser);

export default RouterUser;
