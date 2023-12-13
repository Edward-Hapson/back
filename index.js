const express = require('express')
const cors = require ('cors')

const app = express();

app.use(cors());

app.get('/api', (req,res)=> {
    res.status(200).send('hello, there')
})

app.listen(4000, ()=> {
    console.log('server connected on port 4000')
})