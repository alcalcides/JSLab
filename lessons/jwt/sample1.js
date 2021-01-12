var jwt = require('jsonwebtoken');

// Sign with default (HMAC SHA256)
var token = jwt.sign({ foo: 'bar' }, 'shhhhh'); 

console.log("token", token)