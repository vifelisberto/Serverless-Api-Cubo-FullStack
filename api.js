const AWS = require('aws-sdk');
const uuid = require('uuid');
let tableName = 'participationsDB';

AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

module.exports.get = async (event) => {
  try {
    let response = {
      statusCode: 200
    };

    const params = {
      TableName: tableName,
      Limit: 100
    };

    await docClient.scan(params, function (err, data) {
      if (err) {
        response.statusCode = 400;
        response.body = JSON.stringify(err);
      }

      response.body = JSON.stringify(data);
    }).promise();

    return response;
  } catch (err) {
    return { statusCode: 400, body: JSON.stringify(err) };
  }
};

module.exports.post = async (event) => {
  try {
    const params = JSON.parse(event.body);
    const { firstName, lastName, participation } = params;
    // { "firstName": "Vinicius", "lastName": "Felisberto", "participation": 30 }

    const putParams = {
      TableName: tableName,
      Item: {
        id: uuid.v1(),
        firstName: firstName,
        lastName: lastName,
        participation: participation
      }
    };

    await docClient.put(putParams).promise();

    return { statusCode: 201 };
  } catch (err) {
    return { statusCode: 400, body: JSON.stringify(err) };
  }
};

module.exports.delete = async (event) => {
  try {
    const params = JSON.parse(event.body);
    const { id } = params;

    const deleteParams = {
      TableName: tableName,
      Key: {
        'id': id
      }
    };

    await docClient.delete(deleteParams).promise();

    return { statusCode: 200 };
  } catch (err) {
    return { statusCode: 400, body: JSON.stringify(err) };
  }
};