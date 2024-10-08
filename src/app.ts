import express from "express";
import { json } from "body-parser";
import cors from "cors";
import { NotFoundError } from "./common/errors/not-found-error";
import { errorHandler } from "./common/middlewares/error-handler";
import { indexRouter } from "./routes/v1/index.routes";


const app = express();

app.use(cors())
app.set("trust proxy", true);
app.use(express.urlencoded({extended : false}))
app.use(json());

//routes mapping

app.all("/", (req , res) =>{
    res.status(200).json({status : true , message : "Server is Live"})
})

app.use("/api/v1",indexRouter);

app.all("*" ,(req , res) =>{
   throw new NotFoundError()
})

app.use(errorHandler);


export { app }