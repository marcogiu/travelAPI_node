const app = require("./app");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const port = process.env.PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));
