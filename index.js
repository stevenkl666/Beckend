// import "./models/index.js";
import express from "express";
import bodyParser from "body-parser";
import RouterItem from "./router/ItemRouter.js";
import cors from "cors";
import RouterUser from "./router/UserRouter.js";
import RouterAdmin from "./router/AdminRouter.js";
const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// await db.sync({force: true});

app.use("/", RouterItem);
app.use("/", RouterUser);
app.use("/", RouterAdmin);

app.listen(port, () => {
  console.log(`Server running in ${port}`);
});
