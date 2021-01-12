var jwt = require("jsonwebtoken");

// Asynchronous

const privateKey = "qwerty";
const options = { algorithm: "HS256" }

jwt.sign(
    { key: "value" }, 
    privateKey, 
    options, 
    (err, token) => {
        console.log(token);
    }
);
