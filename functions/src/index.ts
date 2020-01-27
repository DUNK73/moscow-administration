import * as functions from 'firebase-functions';
import * as requests from 'request';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {


  requests({
    uri: "http://ya.ru",
    method: "GET",
  }, function (error, response2, body2) {
    console.log(body2);
    response.send({
      error, response2, body2,
      test: 4444,
    });
  });


  // response.send({ test: 555 });

});


