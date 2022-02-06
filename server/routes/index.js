const {Router} = require('express')
const taskRouter = require('./task')
const userRouter = require('./user')

const router = Router()

router.use('/tasks', taskRouter)
router.use('/users', userRouter)

module.exports = router