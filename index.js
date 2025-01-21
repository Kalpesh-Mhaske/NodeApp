var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('hello from Kalpesshhhhh...KING');
=======
 res.send('hello from Kalpeshhh...Vaishhhhhh ');
>>>>>>> 309d82c6a7a927862ef4531af624eddd7d56a121
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
