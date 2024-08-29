var express = require('express');
var router = express.Router();

router.post('/save', function(reqobj,resobj,next){
    //request received

    //take the data from req

    //connect with DB

    //do required operation

    //prepare the response

    //send the response back to client
      resobj.send('Hellow ... Express this is my wolrd')
})
//localhost:2020/marks/save-post
router.get('/get-result', function(){

})

module.exports = router;
