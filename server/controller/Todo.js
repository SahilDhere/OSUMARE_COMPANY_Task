
const tasks = require('../models/Todo.js')

let Idx = tasks.length + 1;
const validator = require('validator')

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
    const { First_Name, Last_Name, Email, Phone_no } = req.body;

    if (!First_Name || !Last_Name || !Email || !Phone_no) {
        return res.status(400).json({ message: "All fields are required" });
    }

    if(!validator.isEmail(Email)){
        return res.status(404).json({message:"Enter a Valid Email"})
    }

    const newTask = {
        id: Idx++,
        First_Name,
        Last_Name,
        Email,
        Phone_no,
    };

    tasks.push(newTask);
    return res.status(201).json({
        message: "Task added successfully",
        tasks : newTask
    });
};


const editTask = (req, res) => {
    const { id } = req.params;
    const { First_Name, Last_Name, Email, Phone_no } = req.body;

    const taskIndex = tasks.findIndex(t => t.id === parseInt(id));
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }
    if (First_Name) {
        tasks[taskIndex].First_name = First_Name;
    }
    if (Last_Name) {
        tasks[taskIndex].Last_Name = Last_Name;
    }
    if (Email) {
        tasks[taskIndex].Email = Email;
    }
    if (Phone_no) {
        tasks[taskIndex].Phone_no = Phone_no;
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