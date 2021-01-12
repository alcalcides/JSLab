const { generateJWTAsync } = require("./generateJWT");
const { verifyJWT } = require("./verifyJWT");

privateKey = "qwerty";
payload = {
  key: "value",
};

const play = async () => {
  const token = generateJWTAsync(payload, privateKey);
  console.log("token", token);
  const verificationFB = await verifyJWT(token, privateKey)
  console.log(verificationFB)
};

play();
