const entities = require('./entities')

module.exports = (app) => {
    app.use('/entities', entities)
}