const {Router} = require('express')
const TaskController = require('../controllers/task.controllers')
const pagination = require('../middleware/pagination')

const taskRouter = Router()

taskRouter.get('/')
taskRouter.get('/', TaskController.getAllTask, pagination)
taskRouter.get('/:userId', TaskController.getTasksByUser)

taskRouter.patch('/:taskId', TaskController.updateTask)

taskRouter.delete('/:taskId', TaskController.deleteTask)

taskRouter.post('/:userId', TaskController.createTask)

module.exports = taskRouter