import mongoose from "mongoose";

let retryCount = 0;
const allowedRetry = 5;

export default async function connectDb() {
  // Check if mongoose.connections exists and has at least one connection
  if (mongoose?.connections?.length > 0 && mongoose.connections[0].readyState) {
    console.log("Database already connected");
    return;
  }

  try {
    retryCount++;
    const Db = await mongoose.connect(`${process.env.MONGO_URI}`, {});
    if (Db) {
      console.log("Database connection successful " + Db.connections[0].name);
    } else {
      if (retryCount < allowedRetry) {
        await connectDb(); // Retry the connection
        return;
      }
      console.log("Database connection failed due to some reasons");
    }
  } catch (error) {
    if (retryCount < allowedRetry) {
      await connectDb(); // Retry the connection
      return;
    }
    console.log("Database connection failed", error);
    // process.exit(1);
    return { success: false, message: "Database connection failed after retries", error };
  }
}
