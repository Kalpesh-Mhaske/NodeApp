var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
<<<<<<< HEAD
 res.send('Hello From KALPESH MHASKE.....!');
=======
 res.send('Hello From KALPESH MHASKEE...!');
>>>>>>> 3ebd9659f251c04af329a223e0ff9676b663986d
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
