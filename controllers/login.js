const getInformation = require("../services/login");

const getDataLogin = async (req, res) => {
  const { email, password } = req.body;
  const result = await getInformation(email, password);
  res.status(200).json(result);
};

module.exports = { getDataLogin };
