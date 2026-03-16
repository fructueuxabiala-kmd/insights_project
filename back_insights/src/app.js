import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    return res.status(200).json({message: "tout va bien ✅✅"})
})

// app.use("/api", apiRoutes)

export default app