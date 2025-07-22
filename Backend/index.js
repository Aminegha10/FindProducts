import express, { Router } from "express";
import RouterEntropot from "./Routes/EntropotRoute.js";
import RouterProducts from "./Routes/ProductRoute.js";
import { getConnectionDB } from "./config/dbconfig.js";

const app = express();
const port = 3000;
getConnectionDB();
app.use("/api/Entropot", RouterEntropot);
app.use("/api/Products", RouterProducts);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
