import express from "express";
import authRouter from "./routes/auth.route.js";
import testRouter from "./routes/test.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const port=4000

const app=express();
app.use(cors({origin : process.env.CLIENT_URL, credentials: true}))
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRouter);
app.use("/api/test", testRouter);


app.listen(port, ()=>{
     console.log(`server is running on ${port}`);
})