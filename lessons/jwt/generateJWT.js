var jwt = require("jsonwebtoken");

function generateJWT(payload, privateKey, timeoutInHours) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      privateKey,
      { expiresIn: `${timeoutInHours}h` },
      (err, token) => {
        if (err) reject(err);
        else resolve(token);
      }
    );
  });
}

function generateJWTAsync(payload, privateKey) {
  return jwt.sign(payload, privateKey);
}

exports.generateJWT = generateJWT;
exports.generateJWTAsync = generateJWTAsync;
