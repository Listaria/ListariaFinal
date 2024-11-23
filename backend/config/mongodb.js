import mongoose from "mongoose";
import "dotenv/config";

// coonect db
const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI, {
  // just check
    });
    console.log("Db worked fine");

  } catch (er) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
