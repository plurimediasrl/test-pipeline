const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
    res.send('Hello plurimedia!')
})
app.listen(8080, () => {
    console.log('app started')
})