const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { validateTask } = require('../middleware/validation');
const { getTasks, addTask, updateTask, deleteTask } = require('../controllers/taskController');

router.use(authMiddleware); // All routes need auth

router.get('/', getTasks);
router.post('/', validateTask, addTask);
router.put('/:id', validateTask, updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
