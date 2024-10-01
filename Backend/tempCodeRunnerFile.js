import express from "express";
import {config} from "dotenv";
import cors from "cors";

const app=express();
const router=express.Router();

config({path: "./config.env"})
app.listen(process.env.PORT, ()=>
{
    console.log(`Server listening at port ${process.env.PORT}`);
})