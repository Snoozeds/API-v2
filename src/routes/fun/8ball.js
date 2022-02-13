var express = require('express');
var router = express.Router();
router.get('/', (req, res) => {

	var answers = [`I'm certain of it`, `Yes`, `No`, `Definitely`, `For sure`, `Maybe`, `Certainly`, `I'm unsure`, `I'm uncertain`, `Definitely not`]

	let answer = answers[Math.floor(Math.random() * answers.length)]

    res.status(200).send({
				status: "200",
				output: answer
    });

});
module.exports = router