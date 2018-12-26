const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Conected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5c23984c3a8cc83703c86b7a')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then(result => {
    console.log(result);
  });

  // client.close();
});