import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import noteRoutes from './routes/note.route.js'


dotenv.config()
const app = express()
const port = process.env.PORT || 4002


//Datavbse Connecttion
try{
    mongoose.connect(process.env.MONGO_URL)
    console.log("Connected to MongoDB")
}catch(error){
    console.log(`Error connecting to MongoDB, ${error}`)
}


//Routing Middelware
app.use(express.json())
app.use("/api/v1/noteapp", noteRoutes)


//
app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})