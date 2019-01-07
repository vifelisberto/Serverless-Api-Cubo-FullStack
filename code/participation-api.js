var Firebase = require("firebase");

var config = {
  apiKey: "AIzaSyCaXIljycgZDm6Tfdt37LOgsaD8okF3ig8",
  authDomain: "participationdb.firebaseapp.com",
  databaseURL: "https://participationdb.firebaseio.com",
  projectId: "participationdb",
  storageBucket: "participationdb.appspot.com",
  messagingSenderId: "159891268958"
};

module.exports.get = function get(evt, context, callback) {
  try {
    const response = {
      statusCode: 200,
      body: JSON.stringify({ "s": 2 })
    };

    var body = JSON.stringify({
      //Id: 1,
      firstName: "Vinicius",
      lastName: "Felisberto",
      participation: 10

    });


    Firebase.initializeApp(config);

    Firebase.database().ref().child("hello") // creates a key called hello
      .set("world")                            // sets the key value to world
      .then(function (data) {
        // When the write is actually complete
      })
      .catch(function (error) {
        // if the write fails
      });

    // docCliente.put(params, function (err, data) {
    //     if (err) {
    //         callback(err, null);
    //     }
    //     else {
    //         callback(null, data);
    //     }
    // });

    callback(null, response);
  } catch (error) {
    callback(null, { statusCode: 500, body: JSON.stringify(error) });
  }

};

module.exports.post = function post(evt, ctx, callback) {
  // { "firstName": "Vinicius", "lastName": "Felisberto", "participation": 30 }
  const params = JSON.parse(evt.body)
  const { firstName, lastName, participation } = params



  const response = {
    statusCode: 200,
    body: JSON.stringify({ "d": 1 })
  };

  callback(null, response);

};

module.exports.delete = function (evt, ctx, callback) {
  data = [{ "firstName": "Vinicius", "lastName": "Felisberto", "participation": 30 }];

  const response = {
    statusCode: 200
  };

  callback(null, response);

};