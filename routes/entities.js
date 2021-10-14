const listEntity = require('../controllers/listEntity')
const express = require('express')

let router = express.Router()

router.post('/', listEntity)

module.exports = router