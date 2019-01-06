const AWS = require('aws-sdk');
// AWS.config.update({ region: 'us-west-1' });
// const docCliente = new AWS.DynamoDB.DocumentClient();

const tableName = "participation"
module.exports.get = function get(evt, context, callback) {
  try {
    const response = {
      statusCode: 200,
      body: JSON.stringify({"s":2})
    };

    var params = {
      Item: {
          //Id: 1,
          firstName: "Vinicius",
          lastName: "Felisberto",
          participation: 10
          
      },
      TableName: tableName
  };

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
    body: JSON.stringify({"d":1})
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