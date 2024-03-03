const express = require("express");
const erroHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
connectDb();

app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/contacts", require("./Routes/contactRoutes"));
app.use(erroHandler);
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})