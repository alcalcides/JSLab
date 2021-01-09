const operando = false;

const pro = new Promise((resolve, reject) => {
  if (operando)
    resolve((name) => {
      console.log("my function is pray for " + name);
    });
  else
    reject((name) => {
      console.log("my function is bless " + name);
    });
});

pro
  .then((v) => {
    v("you");
  })
  .catch((err) => err("you"));
