var express = require('express')
  , app = express();

app.get('/', function(req, res){
  res.send('Hello World from APP');
});

app.listen(process.env.PORT, function(){
  console.log('APP listening on port ' + process.env.PORT);
});

