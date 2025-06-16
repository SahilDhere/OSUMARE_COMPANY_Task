
const tasks = require('../models/Todo.js')

let Idx = tasks.length + 1;

const getTask = (req, res) => {
    try {

        return res.status(200).json({
            message: "List of Task is : ",
            tasks
        })

    } catch (error) {
        return res.status(500).json({ message: "Failed to Display Items" })
    }
}

const getTaskById = (req, res) => {
    try {

        const { id } = req.params;

        const getById = tasks.find(t => t.id === parseInt(id));
        if (!getById) {
            return res.status(404).json({ message: 'Task not found' })
        }
        return res.status(200).json({
            message: 'Task is : ',
            tasks : getById
        })

    } catch (error) {
        return res.status(500).json({ message: "Failed to Display Items" })
    }
}

const addTask = (req, res) => {
    const { title, name, description, dueDate } = req.body;

    if (!title || !name || !description || !dueDate) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const newTask = {
        id: Idx++,
        title,
        name,
        description,
        dueDate,
    };

    tasks.push(newTask);
    return res.status(201).json({
        message: "Task added successfully",
        tasks : newTask
    });
};


const editTask = (req, res) => {
    const { id } = req.params;
    const { title, name, description, dueDate } = req.body;

    const taskIndex = tasks.findIndex(t => t.id === parseInt(id));
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }
    if (title) {
        tasks[taskIndex].title = title;
    }
    if (name) {
        tasks[taskIndex].name = name;
    }
    if (description) {
        tasks[taskIndex].description = description;
    }
    if (dueDate) {
        tasks[taskIndex].dueDate = dueDate;
    }

    return res.status(200).json({
        message: 'Task updated successfully',
    });
}

const deleteTask = (req, res) => {
    const { id } = req.params;

    const taskIndex = tasks.findIndex(t => t.id === parseInt(id));
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }

    const remove = tasks.splice(taskIndex, 1);

    return res.status(200).json({
        message: 'Task deleted successfully',
        remove
    });
};

module.exports = { getTask, getTaskById, addTask, editTask, deleteTask }