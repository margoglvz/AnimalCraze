import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 8000;
const apiKey = process.env.OPENAI_API_KEY;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));



// start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/", async (req, res) => {
    res.render("index.ejs");
    
});

app.get("/login", (req, res) => {
    res.render("index.ejs", {
        login: true
    });
});

app.get("/signup", (req, res) => {
    res.render("index.ejs", {
        signup: true
    });
});

// app.post("/create", async (req, res) => {
//     console.log(req.body);


//     let data = JSON.stringify({
//         "model": "gpt-3.5-turbo",
//         "messages": [
//             {
//                 "role": "system",
//                 "content": "You are a creative children's writer designed to write children stories in a paragraph that are imaginative and creative."
//             },
//             {
//                 "role": "user",
//                 "content": `Write a children's story that is imaginative about a ${req.body.emotion} ${req.body.animal} named ${req.body.name} who lives in ${req.body.location}.`
//             }
//         ]
//     });
//     let config = {
//         method: 'post',
//         maxBodyLength: Infinity,
//         url: 'https://api.openai.com/v1/chat/completions',
//         headers: { 
//           'Content-Type': 'application/json', 
//           'Authorization': `Bearer ${apiKey}`, 
//           'Cookie': '__cf_bm=uMHOdp6Kg7ntR3OyipPhnrbPAKFB5l8C3VkF_CrYsiA-1713658293-1.0.1.1-iYmdwdlRshLTfPoyC1Sf4x4duFSlEkgqxsk6keukInVWGsrjYTuPCPRV0SZQOR0IqHz6o33f7VnPtJQCHShcqw; _cfuvid=UB5kYkpAkEq0U1.Yd1bEpD3A31hzEQ1PbG3WOXvNc8k-1713658293187-0.0.1.1-604800000; __cf_bm=.Ga2ZHIh80R_14r1ABaWp_ezfsumgQ2J5_hI63RW_1c-1713659460-1.0.1.1-0XDHQ1OfKhOHiEOy77Y4Dc6mPq_MAsXAFu082TqFVL_qs48e_NxOfO95jVvO15peMOX4MizIjcFUX.cBSPzPVw; _cfuvid=xOEurkzz5ygw3sMx4JHwl66Ea6gDwso0C9w2Yyww0LI-1713659460337-0.0.1.1-604800000'
//         },
//         data : data
//     };

//     axios.request(config)
//     .then((response) => {
//         console.log(response.data);
//         const data_json = JSON.stringify(response.data);
//         const data = JSON.parse(data_json);
//         console.log(data_json);
//         console.log(data.choices[0].message.content)
//         // console.log(JSON.stringify(response.data));
//         res.render("index.ejs/", {
//             name : req.body.name,
//             animal : req.body.animal,
//             emotion : req.body.emotion,
//             location: req.body.location,
//             story : data.choices[0].message.content
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// });

