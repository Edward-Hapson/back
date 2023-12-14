const express = require('express')
const cors = require ('cors')
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

const connectDB = async()=> {
    const connect = await mongoose.connect('mongodb://localhost:27017')
    if(connect){
        console.log('database connected');
    }
}
connectDB();

app.get('/api', (req,res)=> {
        res.status(200).json({message: 'hello there'})

})

app.listen(6262, ()=> {
    console.log('server connected on port 6262')
})
