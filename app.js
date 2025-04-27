console.log("Running app.js - modify me");
/***
 * For API 
 */

// import express
const express = require('express');


//create app and configure

const app = express ();
app.use(express.json());


// Define port
const PORT = process.env.PORT || 3000;

//connect to server
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });



//   Now define end point
// app.get("/status", ());  >> End point


// endpoint with collbach function 
//app.get("/status", (request, response));


//end point with response.send
app.get("/status", (request, response) => {
    const status = {
       "Status": "Running"
    };
    
    response.send(status);
 });

// post
 app.post("/submit", (request, response) => {
    console.log(request);
    res = {
        first_name: request.body.name       
     };
     console.log(res);
    
    response.send(res);
 });


 //put
 app.put("/send_file", (request, response) => {
    
    console.log(request);
    
    response.send(response);
 });


 //delete
 app.put("/remove", (request, response) => {
   
    console.log(request);
    
    response.send(response);
 });
