const CONFIG = {
  headers: {
    "x-api-key": process.env.API_KEY,
    "Content-Type": "application/json",
  },
};

const URL = process.env.URL;

module.exports = { CONFIG, URL };
