const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');

const modelData = require('../models/model');

                //   for MOngozdb

                //  const mongodb = require('mongodb');
                //  const MongoClient = mongodb.MongoClient;
                //
                //   const url = 'mongodb://localhost:27017/mean';
                //
                // MongoClient.connect(url,function(err,db){
                //   if(err){
                //     console.error(err);
                //   }
                //   else{
                //     console.log("mongodb connected !" + url);
                //     //console.log(db);
                //   }
                //   //db.close();
                //
                // var collection = db.collection('CRUD');
                //
                // collection.find().toArray(function(err,res){
                //       if(err){
                //         console.error(err);
                //       }
                //       else if(res.length>=0) {
                //         console.log(res);
                //       }
                //       else{
                //         console.log("no data found !");
                //       }
                //       db.close();
                // });
                //
                // });

// for mongoose

// links to read http://mongoosejs.com/index.html
//https://code.tutsplus.com/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527

mongoose.connect('mongodb://localhost:27017/mean', { useMongoClient: true }, function(err){
  if(err){
    console.error("error is:" +err);
  }
  else{
    console.log("Connected to local MongoDb successfully !");
  }
});

mongoose.Promise = global.Promise;

//get data
router.get('/data',function(req,res){
  console.log(" get for all data ");
  modelData.find({})
  //links to read
  // https://stackoverflow.com/questions/31549857/mongoose-what-does-the-exec-function-do
       .exec(function(err,data){
         if(err){
           console.log("some error");
         }else{
           res.json(data);
         }

       });
});

//put Data
router.put('/data/:id',function(req,res){
  console.log("updating data by id");
  console.log(req.params.id);
  //console.log(req.body.name);

console.log(req.body);
console.log(req.body[0].name);
//console.log(req);

  modelData.findByIdAndUpdate(req.params.id,
                            {
                              $set: {name:req.body[0].name}
                            },
                            {new:true},function(err,updtedData){
                        if(err){
                        console.error(err);
                        }
                        else{
                        res.json(updtedData);
                        console.log(updtedData);
                        }
}
);

});

//dlete video
router.delete('/data/:id',function(req,res){
  console.log("Delete data by id");
  modelData.findByIdAndRemove(req.params.id,function (err,deletedData){
    if(err){
      console.error(err);
    }
    else{
      res.json(deletedData);
    }
  });
});






// test route to make sure everything is working (accessed at GET http://localhost:3000/test)
router.get('/test', function(req, res) {
    res.json({ message: 'hooray! welcome to my mean api!' });
});


module.exports = router;
