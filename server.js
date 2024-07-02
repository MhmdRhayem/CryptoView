import express from 'express'
import { dirname } from "path"
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const API_KEY = 'https://api.blockchain.com/v3/exchange'
const app = express()
const port = 3000
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})