import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import { openai } from "../index";

dotenv.config();
const router = express.Router();

router.post("/text", async (req,res) => {
    try{
        const {text ,activeChat} 
    }catch(error){
        console.log("error",error);
        res.status(500).json({error: error.message})
    }
})