const { Task, User } = require("../models");

module.exports.createTask = async (req, res, next) => {
  try {
    const { params: { userId }, body} = req;
      const user = await User.findByPk(userId);
      await user.createTask(body);
      const task = await Task.findOne({where:{body: body.body}})
      res.status(200).send({data: [task]});
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
    res.status(200).send({data: [tasks]});
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

module.exports.updateTask = async (req, res, next) => {
  try {
      const { params: {taskId}, body} = req;
      const updateBody = {...body, isDone: !body.isDone}
        const [rows,  [updatetask]] = await Task.update(updateBody, {
        where: {id: taskId},
        returning: true
      })
      res.status(200).send({data: updatetask});
  } catch (error) {
    next(error);
  }
};

module.exports.deleteTask = async (req, res, next) => {
  try {
      const {params: {taskId}} = req
      const task = await Task.findByPk(taskId)
      task.destroy()
    res.status(200).send({data: task});
  } catch (error) {
    next(error);
  }
};
