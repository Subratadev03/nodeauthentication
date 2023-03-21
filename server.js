const express   =   require('express');
const cors      =   require('cors');
require('dotenv').config();


const app       =   express()
app.use(express.json())   

var coreOptions =   {
    origin:'/http://localhost:3000'
}

//Routes

const productRouter = require('./routes/productRoutes')
const reviewRouter  = require('./routes/reviewRoutes')
const  authRouter   = require('./routes/authenticationRoutes')
app.use('/api/products',productRouter)
app.use('/api/review',reviewRouter)
app.use('/api/auth',authRouter)
//app.use(express.bodyParser());


//middleware
app.use(cors(coreOptions))
// app.use(express.json())
app.use(express.urlencoded({extended:true}))

//api

app.get('/',(req,res)=>{
    res.json({message:'Hello world'})
})


const PORT  = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server running in port no ${PORT}`);
})