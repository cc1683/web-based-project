const express = require('express');
const app = express();

//! set template engine to ejs
app.set('view engine', 'ejs');
//! set path for the public css/js file
app.use(express.static('public'));

//! landing route
app.get('/', (req, res)=>{
    res.render('index');
})


//! Server start on port 3000
//! run `node index` to start the server
app.listen(3000, ()=>{
    console.log('Server started on port 3000....');
})