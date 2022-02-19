const {User, Task} = require('../models')

module.exports.createUser = async (req, res, next) => {
  try {
      const {body} = req
     
      const createUser = await User.create(body)
      if(!createUser) {
        throw new Error('400. Bad Request')
      }
      res.status(200).send({data: [createUser]})
  } catch (error) {
      next(error)
  }
}

module.exports.getAllUsers = async (req, res, next) => {
  try {

    const {pagination} = req
        const users = await User.findAll({
          include: [{model: Task}],
          attributes: {
            exclude: ['password']
          },
          ...pagination
        })
      if(!users) {
        throw new Error('Users not found')
      }
      res.status(200).send({data: users})
  } catch (error) {
      next(error)
  }
}

module.exports.deletelUser = async (req, res, next) => {
  try {
       const {params: {userId}} = req
       const user = await User.findByPk(userId)
        if(!user) {
        throw new Error('Users not found')
      }
       user.destroy()
      res.status(200).send({data: {user}})
  } catch (error) {
      next(error)
  }
}