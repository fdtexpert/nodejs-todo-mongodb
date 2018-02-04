//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');  //SAME AS ABOVE OBJECT DESTUCTURING


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if (err) {
        return console.log('Unable to connect to Mongo DB Server');
    }

    console.log('Connected to MongoDb server');

    db.collection('Todos').find({completed: true}).toArray().then((docs) => {

        console.log('Todos');
        console.log(JSON.stringify(docs, undefined,2));

    }, (err) => {

        console.log('Unable to fetch todos', err);

    });

    db.collection('Todos').find({completed: false}).count().then((count) => {

        console.log(`Todos Count: ${count}`);

    }, (err) => {

        console.log('Unable to fetch todos', err);

    });    


    db.close();
});
