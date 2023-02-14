const router = require("express").Router();
const privateController = require("./Private.Controller");

router.post("/private", privateController.private);

module.exports = router;
