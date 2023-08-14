const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const dataRouter = require('./routers/data.router')
const app = express()



app.use(express.json())
app.use(cors())
dotenv.config()

app.use('/api',dataRouter)

const port = process.env.PORT || 4000
const uri = process.env.MONGO_URI

mongoose.connect(uri).then(()=>{
    console.log(`DB connected ${mongoose.connection.host}`);
    app.listen(port,()=>console.log(`Server running in port ${port}`))
})

