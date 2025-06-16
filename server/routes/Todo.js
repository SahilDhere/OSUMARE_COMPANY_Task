const express = require('express');
const { getTask, getTaskById, addTask, editTask, deleteTask } = require('../controller/Todo');

const router = express.Router();

router.get('/', getTask);
router.get('/:id', getTaskById)
router.post('/', addTask)
router.put('/:id', editTask)
router.delete('/:id', deleteTask)


module.exports = router