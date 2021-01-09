const axios = require("axios").default;

function getProduct(id) {
  return axios
    .get(`https://vvmalimentos-back-dev.herokuapp.com/product/${id}`)
    .then((v) => console.log(v.data.data.id, v.data.data.name));
}

function getPing() {
  return axios
    .get(`https://adretiro-dev-api.herokuapp.com/ping`)
    .then(v => console.log(v.data))
}

getProduct(3).then(getPing());

