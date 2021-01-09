const bcrypt = require("bcrypt");

function verifyHashes(hashes, myPlaintextPassword) {
  bcrypt.compare("userErro", hashes[1], (err, same) => console.log("userErro", same));

  hashes.map((value, index) => {
    if (index % 2 == 0)
      return undefined;
    bcrypt.compare(myPlaintextPassword, value, (err, same) => console.log(value, same)
    );
  });

}
exports.verifyHashes = verifyHashes;
