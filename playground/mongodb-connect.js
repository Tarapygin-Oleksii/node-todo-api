const { MongoClient, ObjectID } = require('mongodb');

const obj = new ObjectID();
console.log(obj, '============================OBJ');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Conected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Oleksii',
  //   age: 29,
  //   location: 'Odessa'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   console.log(result.ops);
  // });

  client.close();
});