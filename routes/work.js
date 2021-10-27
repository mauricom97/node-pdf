const work = require('../controllers/work')
const express = require('express')

let router = express.Router()

router.post('/', work)

module.exports = router