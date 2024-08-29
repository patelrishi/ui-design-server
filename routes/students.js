var express = require('express');
var mongodb =require('mongodb');
var router = express.Router();

router.post('/register', async function (req,res,next){//take the data 
            try {
                const data=req.body.data;
              const MongoClient= mongodb.MongoClient;
              const server = await MongoClient.connect('mongodb+srv://nit:nit@cluster0.26gts.mongodb.net/')
              const db=server.db('sms')
              const collection = db.collection('students')
              const result = await collection.insertOne(data)
              res.send(result)
            }
            catch(ex) {
               res.send(ex.message);
            }
               //connect with DB
               //do required operations
               //prepare the response
               //send the response back to client
              
})
//http::localhost:3030/std/register, post
module.exports = router;