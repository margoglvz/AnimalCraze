import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8080;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/", async (req, res) => {
    res.render("index.ejs"); 
});
