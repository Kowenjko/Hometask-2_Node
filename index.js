require("dotenv").config();
const express = require("express");
const router = require("./routes/index");
const PORT = process.env.PORT || 5000;
const app = express();
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

app.use(express.json());
app.use("/", router);
// -----------------------------------------------------------------
app.use(errorHandler);
app.listen(PORT, () => console.log(`Server start ${PORT}`));
