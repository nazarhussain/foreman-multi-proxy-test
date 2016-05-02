var express = require('express')
  , app = express();

app.get('/', function(req, res){
  res.send('Hello World from API');
});

app.listen(process.env.PORT, function(){
  console.log('API listening on port ' + process.env.PORT);
});

