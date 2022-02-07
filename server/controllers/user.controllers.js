const {User} = require('../models')

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
    const {query:{limit, offset}} = req
        const users = await User.findAll({
          attributes: {
            exclude: ['password']
          },
          limit, 
          offset
        })
      if(!users) {
        throw new Error('Users not found')
      }
      res.status(200).send({data: users})
  } catch (error) {
      next(error)
  }
}