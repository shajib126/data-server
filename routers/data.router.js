
const router = require('express').Router()
const { createDatas, getData } = require('../controllers/user.controller')


router.post('/create',createDatas)
router.get('/datas', getData )

module.exports = router