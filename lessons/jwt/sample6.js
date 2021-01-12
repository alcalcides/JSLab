const { generateJWT } = require("./generateJWT");

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
