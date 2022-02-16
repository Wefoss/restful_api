const { Task, User } = require("../models");

module.exports.createTask = async (req, res, next) => {
  try {
    const { params: { userId }, body} = req;
            const user = await User.findByPk(userId);
    await user.createTask(body);
      console.log(body);
    res.status(200).send({data: [body]});
  } catch (error) {
    next(error);
  }
};

module.exports.getAllTask = async (req, res, next) => {
  try {
    const tasks = await Task.findAll();
    if(!tasks) {
      throw new Error("Tasks no found")
    }
    res.status(200).send(tasks);
  } catch (error) {
    next(error);
  }
};

module.exports.getTasksByUser = async (req, res, next) => {
  try {
    const {params: {userId}} = req
    const user = await User.findByPk(userId, {
      include:[{
        model: Task}],
        attributes: {
          exclude: ["password"],
        },
    });
    // if(!tasks) {
    //   throw new Error("Tasks no found")
    // }
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

module.exports.deleteTask = async (req, res, next) => {
  try {
      const {params: {taskId}} = req
      const task = await Task.findByPk(taskId)
      task.destroy()
    res.status(200).send(task);
  } catch (error) {
    next(error);
  }
};
