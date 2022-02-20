const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
app.use(express.json() )
app.listen(PORT, () => console.log(`API is running on port: ${PORT}.`))
const rateLimit = require('express-rate-limit') 
const limiter = rateLimit({
windowMs: 60000, // 1 minute.
max: 100, // Max 100 requests a minute.
message: {
status: 429,
error: 'Too many requests in the last minute. Please slow down. It is recommended you add a cooldown.'
},
standardHeaders: true,
legacyHeaders: false,
})

// Home page when nothing is specified
app.get('/', (req, res) => {
res.sendFile('/home/runner/APIv2/index.html')
})

// Anime
app.use('/anime/wave',  limiter, require('./routes/anime/wave.js'));
app.use('/anime/hug', limiter, require('./routes/anime/hug.js'));
app.use('/anime/slap', limiter, require('./routes/anime/slap.js'));
app.use('/anime/laugh', limiter, require('./routes/anime/laugh.js'));

// Animals
app.use('/animals/dog', limiter, require('./routes/animals/dog.js'));

// Fun
app.use('/fun/8ball', limiter, require('./routes/fun/8ball.js'));
app.use('/fun/randomnumber', limiter, require('./routes/fun/randomnumber.js'))

// 404 error
app.get('*', function(req, res) {
res.status(404).send({status: "404", Info: "Requested endpoint doesn't exist."})
});
