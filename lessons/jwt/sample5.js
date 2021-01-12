var jwt = require("jsonwebtoken");

function generateJWT(payload, privateKey, timeoutInHours) {
  return new Promise( (resolve, reject) => {
    jwt.sign(
      payload,
      privateKey,
      { expiresIn: `${timeoutInHours}h` },
      (err, token) => {
        if (err) reject(err);
        else resolve(token)
      }
    );
  });
}

privateKey = "qwerty";
payload = {
  key: "value",
};
const timeoutInHours = 3;

const play = async () => {
  const token = await generateJWT(payload, privateKey, timeoutInHours);
  console.log("token", token);
};

play();
