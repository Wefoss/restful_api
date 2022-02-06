const {User} = require('../models')

module.exports.createUser = async (req, res, next) => {
  try {
      const {body} = req
     
      const createUser = await User.create(body)
      if(!createUser) {
        throw new Error('400. Bad Request')
      }
      res.status(200).send(createUser)
  } catch (error) {
      next(error)
  }
}

module.exports.getAllUsers = async (req, res, next) => {
  try {
        const users = await User.findAll()
      if(!users) {
        throw new Error('Users not found')
      }
      res.status(200).send(users)
  } catch (error) {
      next(error)
  }
}