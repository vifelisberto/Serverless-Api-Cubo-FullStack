const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });
// var dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

module.exports.get = async (event) => {
  // try {
  const response = {};

  // var body = JSON.parse({
  //   firstName: "Vinicius",
  //   lastName: "felisberto",
  //   participation: 10
  // });

  docClient.scan({ TableName: "participationsDB", Key: { "id": id, "name": name } }, function (err, data) {
    if (err) {
      response.body = JSON.stringify(err, null, 2);
      response.statusCode = 500;
    } else {
      response.statusCode = 500;
      response.body = JSON.stringify(data, null, 2);
    }
  });

  return response;
  // } catch (error) {
  //   return { statusCode: 500, body: JSON.stringify(error) };
  // }

};

module.exports.post = async (event) => {
  // { "firstName": "Vinicius", "lastName": "Felisberto", "participation": 30 }
  // const params = JSON.parse(event.body)
  // const { firstName, lastName, participation } = params

  const response = {
    statusCode: 200,
    body: JSON.stringify({ "d": 1 })
  };

  const params = {
    TableName: "participationsDB",
    Item: {
      id: "hero1",
      name: "ttt",
      checked: false
    }
  };

  await docClient.put(params).promise();

  return response;
};

module.exports.delete = async (event) => {
  // data = [{ "firstName": "Vinicius", "lastName": "Felisberto", "participation": 30 }];

  const response = {
    statusCode: 200
  };

  return response;
};