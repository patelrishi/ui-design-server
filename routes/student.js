var express = require('express');
var router = express.Router();

router.post('/register/:runs', function(req,res,next){
               //take the data from req object
              // const name=req.query.name
               //const loc=req.query.loc 
               const {hun}=req.query 
               const {runs}=req.params
               const {name}=req.body
               const {loc}=req.headers
               

               //connect with DB
               //do required operations
               //prepare the response
               //send the response back to client
               res.send(`hii .... iam ${name} im from ${loc} my runs ${runs} and my hundreds ${hun} `)
})
//http::localhost:3030/std/register, post
module.exports = router;