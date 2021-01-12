var jwt = require("jsonwebtoken");

privateKey = "qwerty"

jwt.sign(
  { key: "value" },
  privateKey,
  { algorithm: "RS256", expiresIn: "3h" },
  (err, token) => {
    console.log(token);
  }
);
