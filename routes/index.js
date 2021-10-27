const work = require('./work')

module.exports = (app) => {
    app.use('/work', work)
}