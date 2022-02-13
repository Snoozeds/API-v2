var express = require('express');
var router = express.Router();
router.get('/', (req, res) => {

	var facts = ['Despite common belief, dogs can see color.', 'Dogs most likely dream.', 'Dogs have been pets for humans for more than 12,000 years.', 'Elderly dogs can have dementia.', 'Dogs have three eyelids.', 'Dalmatians are completely white at birth.', 'Puppies are born blind, deaf, and without teeth.', 'The basenji is the only dog breed that cannot bark.', 'A dog and cat can become great friends.', 'There are an estimated 900 million dogs in the world.', 'Dogs have sweat glands in between their paws.', 'More than half of all US presidents have owned a dog at some point.', `The print of a dog's nose is unique.`, '3 dogs survived the Titanic disaster.', 'Dogs have less taste buds than us humans.', 'Greyhounds can run as fast as 45mph (~72kph).', 'Dogs drink the same way that cats do.', 'Dogs can hear 4x as far as humans.', `The border collie breed is regarded as the 'smartest' dog breed.`, 'The Doberman breed is known for being great at protection.', 'Doberman dogs were used by U.S Marine Corps during WWII.']

	let fact = facts[Math.floor(Math.random() * facts.length)]

    res.status(200).send({
				status: "200",
        url: "https://assets.dankrpg.xyz/Images/Dogs/" + Math.floor(Math.random()*15) +  ".jpg",
				fact: fact
    });

});
module.exports = router