const { User, Task } = require("../models");
const createError = require("http-errors");

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;

    const createdUser = await User.create(body);
    if (!createdUser) {
      return next(createError(400, "Bad Request"));
    }
    res.status(200).send({ data: [createdUser] });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const { pagination } = req;
    const users = await User.findAll({
      include: [{ model: Task }],
      attributes: {
        exclude: ["password"],
      },
      ...pagination,
    });
    if (!users) {
      return next(createError(404, "Users Not Found"));
    }
    res.status(200).send({ data: users });
  } catch (error) {
    next(error);
  }
};

module.exports.deletelUser = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;
    const user = await User.findByPk(userId);
    if (!user) {
      return next(createError(404, "User Not Found"));
    }
    user.destroy();
    res.status(200).send({ data: { user } });
  } catch (error) {
    next(error);
  }
};
