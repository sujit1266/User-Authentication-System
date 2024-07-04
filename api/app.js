import express from "express";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
const port=4000

const app=express();
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRouter)

app.listen(port, ()=>{
     console.log(`server is running on ${port}`);
})