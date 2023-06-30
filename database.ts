import mongoose from "mongoose";

function makeDatabase(mongoString: string) {
    mongoose.connect(mongoString).catch((err) => {
        console.error("Cant connect to database");
        console.error(err);
    });
    
    const database = mongoose.connection;
    database.on("error", console.error.bind(console, "connection error:"));
    database.once("connected", () => {
        console.log("Connected to database");
    });
    
    return database;
}

export default makeDatabase;