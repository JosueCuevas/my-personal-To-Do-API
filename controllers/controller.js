const Task = require("../model/Tasks");

class myController {
  createTask(req, res, next) {
    const task = req.body;
    if (!task || !task.description) {
      return res.status(400).json({
        error: 'required "content" field is missing',
      });
    }
    const newTask = new Task({
      title: task.title,
      description: task.description,
    });

    newTask
      .save()
      .then((savedTask) => {
        res.status(201).json(savedTask);
      })
      .catch((err) => console.error(err));
  }
  deleteTaskById(req, res) {
    const { id } = req.params;
    Task.findByIdAndRemove(id)
      .then(() => res.status(204).end())
      .catch((err) => next(err));
    res.status(204).end();
  }
  getAllTasks(req, res, next) {
    Task.find({})
      .then((tasks) => {
        res.json(tasks);
      })
      .catch((err) => console.error(err));
  }
  getById(req, res, next) {
    const { id } = req.params;
    Task.findById(id)
      .then((task) => {
        if (task) {
          return res.json(task);
        } else {
          res.status(404).end();
        }
      })
      .catch((err) => next(err));
  }
  home(req, res, next) {
    res.send(`<h1>Hello World</h1>`);
  }
  updateTask(req, res, next) {
    const { id } = req.params,
      { done } = req.body,
      newTaskInfo = {
        done,
      };
    Task.findByIdAndUpdate(id, newTaskInfo, { new: true })
      .then((result) => res.json(result))
      .catch((err) => next(err));
  }
  /* Handle Errors */
  castError(error, req, res, next) {
    if (error.name === "CastError") {
      res.status(400).send({ error: "id used is malformed" });
    } else {
      res.status(500).end();
    }
  }
  notFound(req, res, next) {
    console.log(req.path);
    res.status(404).json({
      error: "Not found",
    });
  }
}
module.exports = myController;
