const express = require('express')
const app = express()
const path = require('path')
const { Dog } = require('./db/db').models
app.use(express.json())


// to add api route, use router
// app.use('/api/routeName', require('./api/routeFileName'))

app.use('/', express.static('dist'))
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '../client/index.html')))

app.use(({ message }, req, res, next) => {
    res.status(500).send({ message })
})

app.get('/api/dogs', (req,res,next) => {
    Dog.findAll()
    .then(dogs => res.send(dogs))
    .catch(next)
})

module.exports = app
