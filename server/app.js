import morgan from "morgan";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbMDB } from "./db/database.js";
import router from "./routes/user.routes.js";

dotenv.config();

const app = express();

//middlware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(router)
dbMDB();

//puerto
app.set("port", process.env.PORT || 4000);

//escucha
app.listen(app.get("port"), () => {
    console.log(`Servidor en el puerto ${app.get("port")}`);
})