import express from 'express'
import { dirname } from "path"
import { fileURLToPath } from "url";
import bodyParser from 'body-parser';
import axios from 'axios';
const __dirname = dirname(fileURLToPath(import.meta.url));

const API_KEY = 'https://api.blockchain.com/v3/exchange'
const app = express()
const port = 3000
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.post("/submit",async (req,res)=>{
    try{
        const result = await axios.get(`${API_KEY}/tickers/${req.body.symbol}`);
        res.render("index.ejs",{data:result.data})
    }catch(err){
        res.render("index.ejs",{err:err.message})
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})