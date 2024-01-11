import express from 'express';
import router from './router/web.js';
import connectdb from './db/connectdb.js';
import cors from 'cors';
const app=express();
const port=process.env.PORT || 3000;
const DATABASE_URL=process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";

connectdb(DATABASE_URL);
app.use(cors())
app.use(express.json());
// app.use(express.urlencoded({extended:true}))

app.use('/',router)


app.listen(port,()=>{
    console.log(`http:localhost:${port}`)
})