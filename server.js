const express = require('express')

const port = process.env.port || 8000;
const app = express()

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(port, (err)=>{
    if(err) throw err;
    console.log(`listening on ${port}`);
    
})
