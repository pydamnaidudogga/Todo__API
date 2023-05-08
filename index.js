const { urlencoded } = require('body-parser');
const express = require('express');
// This api is running on this port
const port = 8000;
// CORS gives web servers the ability to say they want to opt into allowing cross-origin access to their resources.
const cors = require('cors');
//  Calls the express function "express()" and puts new Express application inside the app variable
const app = express();
const corOptions = {
    origin:'https://localhost:8080'
}
app.use(cors(corOptions));
// It parses incoming requests with JSON payloads and is based on body-parser
app.use(express.json());
//  It creates a body object for req
app.use(express.urlencoded({extended:true}));

app.use('/',require('./routes/index'));


// The express server is listening on the port 8000;
app.listen(port,()=>{
    console.log('success in connection to the server');
});