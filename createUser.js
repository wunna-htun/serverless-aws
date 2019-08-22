'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const uuid = require('uuid');
 dynamoDb = new AWS.DynamoDB.DocumentClient();
module.exports.createUser = async event => {





    // if(event.httpMethod==="POST"&& event.body){
    //   let json =JSON.parse(event.body)
    //   return {
    //     statusCode: 200,
    //     body: JSON.stringify(
    //       {
    //         message: 'Welcme '+event.body.name,
    //         object: json
    //       },
    //       null,
    //       2
    //     ),
    //   };
    // }


    
    dynamodb.putItem(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
      /*
      data = {
       ConsumedCapacity: {
        CapacityUnits: 1, 
        TableName: "Music"
       }
      }
      */
    });

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Create User sucessfully!',
        input:event
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
