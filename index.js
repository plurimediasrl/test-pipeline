const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
    res.send('Hello Pluriplurimedia! '+ parseInt(Math.random()*10000))
})
app.listen(process.env.PORT || 3000)