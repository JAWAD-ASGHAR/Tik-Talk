import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const databaseUrl = process.env.DATABASE_URL;


const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})   

mongoose.connect(databaseUrl).then(() => [
    console.log("Connected to database"),
]).catch((error) => [
    console.log(error),
])