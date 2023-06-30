import app from "./app";
import makeDatabase from "./database";
import dotenv from "dotenv";

dotenv.config();

const PORT = 3000;
makeDatabase(process.env.DATABASE_URL == undefined ? "" : process.env.DATABASE_URL);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
