const axios = require("axios");
const { CONFIG } = require("../const");

const getDataLogin = async (req, res) => {
  const { email, password } = req.body;
  const result = await getInformation(email, password);
  res.status(200).json(result);
};

const getInformation = async (email, password) => {
  const body = await buildBody(email, password);
  try {
    const { data } = await axios.post(process.env.URL_VALIDATE, body, CONFIG);
    return data;
  } catch (error) {
    console.error(error.massage);
  }
};

const getAuthenticationToken = async () => {
  try {
    const { data } = await axios.get(process.env.URL_START, CONFIG);
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

module.exports = { getDataLogin };
