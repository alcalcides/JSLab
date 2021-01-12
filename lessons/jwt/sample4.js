var jwt = require("jsonwebtoken");

privateKey = "qwerty"

jwt.sign(
  { key: "value" },
  privateKey,
  null,
  (err, token) => {
    console.log(token);
  }
);
