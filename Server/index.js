const express=require('express')
const connectToMongo=require('./db')
const cors=require('cors')

const app=express()
connectToMongo()

port=process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.use('/api/data',require('./Routes/route'))

app.get('/',(req,res)=>{
   console.log("hello World");
})




app.listen(port,()=>{
    console.log(`Fraz server is listening on port http://localhost:${port}`)
})

