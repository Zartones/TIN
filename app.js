const express = require('express');
const bodyParser = require("body-parser");
const { request } = require('express');
const app = express();

app.use(bodyParser.urlencoded({
  extended:true
}));

app.use(bodyParser.json());

app.set('view engine','ejs');

app.get('/hello', function(req, res) {
  res.send('Hello World!');
});

app.get("/form", function(req, res) {
  res.sendFile(__dirname + "/form.html");
});
  
app.post("/formdata", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var num3 = Number(req.body.num3);

   var list = [{'number': num1}, {'number': num2}, {'number': num3}];
   res.render('formdata', {'formdata': list});
});

app.post("/jsondata",function(req,res){
  res.send('num1: ${req.body.num1} \n num2: ${req.body.num2} \n num3: ${req.body.num3}');
});


app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

