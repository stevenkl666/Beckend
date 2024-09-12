import db from "../utils/conecction.js";
import User from "./UserModel.js";
import Item from "./ItemModel.js";
import adminModels from "./adminModels.js";

await db.sync();