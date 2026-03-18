import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"
import apiRoutes from "./routes/index.js"
import { requireAuth } from "./middlewares/requireAuth.js"
import { notFound } from "./middlewares/notFound.js"
import { errorHandler } from "./middlewares/errorHandler.js"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    return res.status(200).json({message: "tout va bien ✅✅"})
})

app.use("/api", apiRoutes)
app.use(requireAuth)


app.use(notFound)

app.use(errorHandler)

export default app