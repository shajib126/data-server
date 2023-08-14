
const router = require('express').Router()
const createDatas = require('../controllers/user.controller')


router.post('/create',createDatas)

module.exports = router