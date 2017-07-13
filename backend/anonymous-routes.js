var express = require('express'),
    quoter  = require('./quoter');

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var app = module.exports = express.Router();

app.get('/api/random-quote', function(req, res) {
  res.status(200).send(quoter.getRandomOne());
});

app.post('/api/upload-handler',multipartMiddleware,function(req, res, next){
  console.log(req.body, req.files);
  if (!req.files) {
      return res.json({status:0,param:"image",messages:{param:'image',msg:"Problam in file uploading"}});
  }
  res.json({
    'body':req.body,
    'file':req.files
  })
  return
})

app.get('/api/upload',function(req, res, next){
    console.log(req.files,req.body,req)
    res.json(req.query)
    return
})


app.post('/api/checker', function(req, res){
  console.log(req.body)
  res.json(req.body)
  return
})
