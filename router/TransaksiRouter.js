import express from "express";
import {
    createTransaksi,
    deleteTransaksi,
    getTransaksi,
    updateTransaksi,
  } from "../controller/transaksiControler.js";
  const RouterTransaksi = express.Router();
  

  RouterTransaksi.get("/getTrx/:id", getTransaksi);
  RouterTransaksi.post("/createTrx", createTransaksi);
  RouterTransaksi.put("/updateTrx/:id", updateTransaksi);
  RouterTransaksi.delete("/deleteTrx/:id", deleteTransaksi);
  
  export default RouterTransaksi; 