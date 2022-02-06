const {Router} = require('express')
const TaskController = require('../controllers/task.controllers')

const taskRouter = Router()

taskRouter.get('/')
taskRouter.get('/', TaskController.getAllTask)
taskRouter.get('/:userId', TaskController.getTasksByUser)

taskRouter.delete('/:taskId', TaskController.deleteTask)

taskRouter.post('/:userId', TaskController.createTask)

module.exports = taskRouter