import express from "express";
import bodyParser from "body-parser";

import calculationRoutes from "./routes/calculation.routes.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/calculate", calculationRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running. Port: ${PORT}`));

export default app;
