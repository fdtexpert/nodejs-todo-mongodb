//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');  //SAME AS ABOVE OBJECT DESTUCTURING

// var obj = new ObjectID();
// console.log(obj);


// var user = {name: 'Amir', age: 45}; //object destucturing
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if (err) {
        return console.log('Unable to connect to Mongo DB Server');
    }

    console.log('Connected to MongoDb server');

    db.collection('Todos').insertOne({

        text: 'Amit To do',
        completed: false

    }, (err, result) => {

        if(err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined,2));
        console.log(result.ops[0]._id, result.ops[0]._id.getTimestamp());

    });


    db.close();
});
