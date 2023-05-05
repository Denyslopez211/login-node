const { Router } = require("express");
const { getDataLogin } = require("../controllers/login");
const router = Router();

router.get("/login", getDataLogin);
router.post("/login", getDataLogin);

module.exports = router;
