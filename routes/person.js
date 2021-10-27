const person = require('../controllers/person')
const express = require('express')

let router = express.Router()

router.get('/:nome', person)

module.exports = router