const bcrypt = require("bcrypt");
const { verifyHashes } = require("./verifyHashes");
const saltRounds = 10;
const myPlaintextPassword = "123456";
const hashes = [];

bcrypt.genSalt(saltRounds, function (err, salt) {
  bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
    console.log(myPlaintextPassword, salt, hash);
    hashes.push(1);
    hashes.push(hash);
    console.log(hashes);
  });
});

bcrypt.genSalt(saltRounds + 1, function (err, salt) {
  bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
    console.log(myPlaintextPassword, salt, hash);
    hashes.push(String(2));
    hashes.push(hash);
    console.log(hashes);
    verifyHashes(hashes, myPlaintextPassword);
  });
});



