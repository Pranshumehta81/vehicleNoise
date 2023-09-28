const router = require('express').Router()
const auth = require('../middleware/auth')
const recordCtrl = require('../controllers/recordCtrl')


router.route('/')
.get(auth,recordCtrl.getRecords)
.post(auth,recordCtrl.createRecord)


router.route('/:id')
.get(auth,recordCtrl.getRecord)
.put(auth,recordCtrl.updateRecord)
.delete(auth,recordCtrl.deleteRecord)

module.exports = router