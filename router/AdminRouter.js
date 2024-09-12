import express from "express";
import {
  getAllAdmin,
  // getAllAdminById,
  createAdmin,
  updateAdmin,
  deleteAdmin,
} from "../controller/adminControler.js";
const RouterAdmin = express.Router();

RouterAdmin.get("/get", getAllAdmin);
// RouterAdmin.get("/find/:id", getAllAdminById);
RouterAdmin.post("/createAdmin", createAdmin);
RouterAdmin.put("/updateAdmin/:id", updateAdmin);
RouterAdmin.delete("/deleteAdmin/:id", deleteAdmin);

export default RouterAdmin;
