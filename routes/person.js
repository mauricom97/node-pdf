const person = require('../controllers/person')
const express = require('express')

let router = express.Router()

router.get('/:nomes/:fase', person)

module.exports = router