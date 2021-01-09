const operando = 13 ** 0;

const pro = new Promise((resolve, reject) => {
  if (operando % 2 === 0) resolve(`${operando } é par`);
  else reject(`${operando } é ímpar`);
});

pro
  .then((v) => {
    console.log(v);
  })
  .catch((err) => console.log(err));
