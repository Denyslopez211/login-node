const axios = require("axios");
const { CONFIG, URL } = require("../const");

const getInformation = async (email, password) => {
  const body = await buildBody(email, password);
  try {
    const { data } = await axios.post(`${URL}/classic/validate`, body, CONFIG);
    return data;
  } catch (error) {
    console.error(error.massage);
  }
};

const getAuthenticationToken = async () => {
  try {
    const { data } = await axios.get(`${URL}/start`, CONFIG);
    return data.authenticationToken;
  } catch (error) {
    throw new Error("Error getting authentication token");
  }
};

const buildBody = async (email, password) => {
  const authenticationToken = await getAuthenticationToken();
  return {
    authenticationToken,
    login: email || process.env.EMAIL,
    password: password || process.env.PASSWORD,
  };
};

module.exports = getInformation;
