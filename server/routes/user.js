const { Router } = require("express");
const userController = require("../controllers/user.controllers");

const userRouter = Router();

userRouter.get("/");
userRouter.get("/", userController.getAllUsers);

userRouter.post("/", userController.createUser);

userRouter.delete("/:userId", userController.deletelUser);

module.exports = userRouter;
