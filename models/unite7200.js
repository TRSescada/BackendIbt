var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Unite7200 = new Schema({
  userID:{
    type:String
  },  
  phOsmosée:{
    type:Number
  },
  cOsmosée:{
    type:Number
  },
  phrReosmosée:{
    type:Number
  },
  cReosmosée:{
    type:Number
  },
  phDéminée:{
    type:Number
  },
  cDéminée:{
    type:Number
  },
  submissionTime: Date,
  postIndex: Number                  
});

module.exports = mongoose.model('unite7200s', Unite7200);