const person = require('./person')

module.exports = (app) => {
    app.use('/person', person)
}