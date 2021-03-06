const express = require('express')
const app = express()
const {PORT = 5000, NODE_ENV = 'production'} = process.env
// app.use(require('cors')())
app.use(require('cors')({origin: '*'}))

if (NODE_ENV === 'development') {
    require('dotenv').load()
    app.use(require('morgan')('dev'))
}

app.use(require('body-parser').json())



//Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/records', require('./routes/records'))
app.use('/api/contacts', require('./routes/contacts'))
app.use('/api/properties', require('./routes/properties'))
app.use('/api/stats', require('./routes/stats'))



app.use((req, res, next) => {
    const status = 404
    const error = `Could not ${req.method} ${req.url}`

    next({status, error})
})

app.use((err, req, res, next) => {
    if (NODE_ENV === 'development') console.error(err)

    const message = 'Something went wrong.'
    const {status = 500, error = message } = err

    res.status(status).json({status, error})
})

if (NODE_ENV !== 'testing') {
    const listener = () => console.log(`Listening on port ${PORT}!`)
    app.listen(PORT, listener)
}

module.exports = app
