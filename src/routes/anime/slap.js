var express = require('express');
var router = express.Router();
router.get('/', (req, res) => {
    res.status(200).send({
				status: "200",
        url: "https://assets.dankrpg.xyz/Images/Slaps/" + Math.floor(Math.random()*9) +  ".gif"
    });
});
module.exports = router