const { Task, User } = require("../models");
const createError = require("http-errors");

module.exports.createTask = async (req, res, next) => {
  try {
    const {
      params: { userId },
      body,
    } = req;
    const user = await User.findByPk(userId);
    await user.createTask(body);
    const task = await Task.findOne({ where: { body: body.body } });
    if (!user) {
      return next(createError(404, "User Not Found"));
    }
    if (!task) {
      return next(createError(400, "Bad Request'"));
    }
    res.status(200).send({ data: [task] });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllTask = async (req, res, next) => {
  try {
    const tasks = await Task.findAll();
    if (!tasks) {
      return next(createError(404, "Tasks Not Found"));
    }
    res.status(200).send({ data: [tasks] });
  } catch (error) {
    next(error);
  }
};

module.exports.getTasksByUser = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;
    const user = await User.findByPk(userId, {
      include: [
        {
          model: Task,
        },
      ],
      attributes: {
        exclude: ["password"],
      },
    });
    if (!user) {
      return next(createError(404, "User Not Found"));
    }
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

module.exports.updateTask = async (req, res, next) => {
  try {
    const {
      params: { taskId },
      body,
    } = req;
    const [rows, [updatetask]] = await Task.update(body, {
      where: { id: taskId },
      returning: true,
    });
    if (!updatetask) {
      return next(createError(400, "Bad Request"));
    }
    res.status(200).send({ data: updatetask });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteTask = async (req, res, next) => {
  try {
    const {
      params: { taskId },
    } = req;
    const task = await Task.findByPk(taskId);
    if (!task) {
      return next(createError(404, "Task Not Found"));
    }
    task.destroy();
    res.status(200).send({ data: task });
  } catch (error) {
    next(error);
  }
};
