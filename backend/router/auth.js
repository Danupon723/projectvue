const router = require('express').Router()
const admincontroller = require('../controller/auth')

router.post('/login' , admincontroller.loing)
router.post('/register' , admincontroller.register)
router.get('/department' , admincontroller.department)
router.get('/groups' , admincontroller.group)



module.exports = router