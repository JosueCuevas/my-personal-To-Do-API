const { Router } = require("express");
const router = Router();
const myController = require("../controllers/controller");

const c = new myController();
/* Render */
router.get("/", c.home);
/* Mongo Queries */

router.get("/api/tasks", c.getAllTasks);
router.get("/api/tasks/:id", c.getById);
router.delete("/api/tasks/:id", c.deleteTaskById);
router.put("/api/tasks/:id", c.updateTask);
router.post("/api/tasks", c.createTask);
/* Errors */
router.use(c.castError);
router.use(c.notFound);

module.exports = router;
