var express = require('express');
var router = express.Router();
router.get('/:max', (req, res) => {
let max = req.params.max
	
if (isNaN(max) === true) {
res.status(400).send({
status: "400",
error: "Max specified is not a number. (Bad request)"
})
}

else {
res.status(200).send({
status: "200",
output: Math.floor(Math.random()*max)
});
}
});
module.exports = router
