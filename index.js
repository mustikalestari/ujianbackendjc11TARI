const express=require('express');
const bodyParser=require('body-parser')
const cors=require('cors')

//create app
const app=express()

//test connection database
const db=require('./connection/index')
db.connect(err =>{
    if(err) throw err;
    console.log('mysql connected...')
})



//set middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

//set cors(izin akses ke backend)
app.use(cors())

//set routes(Setting API backend)
const {userRouter}=require('./routes')
app.use('/users', userRouter)

app.get('/',(req,res)=> res.send('hello from backend'));


//set Port 
const PORT= process.env.PORT ||1414


app.listen(PORT, console.log(`server running on port:${PORT}`));

