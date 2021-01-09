const axios = require("axios").default;

function getPing() {
  return axios
    .get(`https://adretiro-dev-api.herokuapp.com/ping`)
    .then(v => console.log(v.data)) 
    
}

getPing(); 
