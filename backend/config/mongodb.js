import mongoose from "mongoose";
import "dotenv/config";

// coonect db
const connectDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://sagarchaurasialink:t9cJDM5CS4UOqgNZ@cluster0.btqwc.mongodb.net",
      {}
    );
    console.log("Db worked fine");
  } catch (er) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
