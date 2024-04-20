import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import openai from "openai";
import { create } from "domain";
import dotenv from "dotenv";
dotenv.config();
// import Client from "pg";

const app = express();
const port = 8000;
const apiKey = process.env.OPENAI_API_KEY;
const client = axios.create({
    headers: {
        Authorization : "Bearer " + apiKey,
    },
});
console.log("API Key: ", process.env.OPENAI_API_KEY);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));



// start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/", async (req, res) => {
    res.render("index.ejs");
    
});

app.post("/create", async (req, res) => {
    console.log(req.body);
    const dalle_url = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    const dalle_prompt  = `Can you generate a cartoon / kawaii illustration that reprents a ${req.body.emotion} ${req.body.animal} named ${req.body.name} who lives in ${req.body.location}`;
    const dalle_request = {
        method : 'POST',
        url : dalle_url,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        data : {
            prompt : dalle_prompt,
            max_tokens : 1,
            temperature : 0.7
        }
    };
    console.log(`Dalle Request: ${Object.values(dalle_request)}`)
    try {
        
        const response = await axios.request(dalle_request);
        const image_url = response.data.choices[0].text.trim();
        console.log(image_url);
        if (!image_url) {
            res.status(500).send('Something went wrong with the DALL-E Image API');
            return;
        }

    } catch (error) {
        console.log(error);
        
    }
        

    res.render("index.ejs/", {
        name : req.body.name,
        animal : req.body.animal,
        emotion : req.body.emotion,
        location: req.body.location
    });
});

