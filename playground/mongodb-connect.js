    const MongoClient = require('mongodb').MongoClient;


    MongoClient.connect('mongodb://localhost:27017/Todoapp',{ useNewUrlParser: true },(err,db) => {
    const mydb = db.db('TodoApp');
    if(err){
    return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to Mangodb server :-)');
    // data insert using this command
    // mydb.collection('Todos').insertOne({
    //    id: 1,
    //    name : 'Deepak pal',
    //    age: 26,
    //    profile: 'Nodejs Developer',
    //    descritption: 'I m learning nodejs!!!'
    // }, (err, result) => { 
    //     if(err){
    //         return console.log('Unable to insert data', err);
    //     }
    //        //console.log(JSON.stringify(result.ops,undefined,2)); 
    //        console.log(result.ops[0]._id);
    // });

    //data fetching using this command
      mydb.collection('Todos').find().toArray().then((docs) => {
          console.log('Todos');
          console.log(JSON.stringify(docs,undefined,2));
      }, (err) => {
          if(err){
              console.log('Unable to find data',err);
          }
      });
   // db.close(); 
    });

