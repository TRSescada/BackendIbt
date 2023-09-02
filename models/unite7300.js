var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Unite7300 = new Schema({
  userID:{
    type:String
  },  
  phAux:{
    type:Number
  },
  cAux:{
    type:Number
  },
  phAlimentaire:{
    type:Number
  },
  cAlimentaire:{
    type:Number
  },
  phCondensat:{
    type:Number
  },
  cCondensat:{
    type:Number
  },
  submissionTime: Date,
  postIndex: Number                  
});

module.exports = mongoose.model('unite7300s', Unite7300);