import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import noteRoutes from './routes/note.route.js'


dotenv.config()
const app = express()
const port = process.env.PORT || 4002


//Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(`Error connecting to MongoDB, ${error}`)
    }
}
connectDB()

//Routing Middelware
app.use(cors())
app.use(express.json())
app.use("/api/v1/noteapp", noteRoutes)


//
app.listen(port, () => {
    console.log(`running on port ${port}`)
})