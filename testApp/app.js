var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://cfd-account:lTaqvuxCfztEPLrfIfW69MRm2o74qEFeGtH4j19Byn90z7jgGTUZCueKJynPTXuArHnuqdd1ivc2bWUEcEGiGQ==@cfd-account.documents.azure.com:10255/?ssl=true&replicaSet=globaldb';
var express = require('express');
app = express();
const port = process.env.PORT || 5000;
app.listen(port,function(){
    console.log('listening on 5000');
})
app.get('/',(req,res)=>{
    res.send('Hello !!');
})

MongoClient.connect(url,{ useNewUrlParser: true },function(err, db) {
assert.equal(err,null);
console.log('connected to mongodb');
});