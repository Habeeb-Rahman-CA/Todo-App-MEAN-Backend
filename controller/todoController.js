const Todo = require("../models/todoModel")

//Create new todo
const createTodo = async (req, res) => {
    try {
        const newTodo = new Todo({
            text: req.body.text
        })
        const saveTodo = await newTodo.save()
        res.status(200).json(saveTodo)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }

}

//Get all todo
const getAllTodo = async (req, res) => {
    try {
        const todos = await Todo.find()
        res.status(200).json(todos)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }

}

// Update todo
const updateTodo = async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedTodo)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}

//delete todo
const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "This todo is deleted" })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}

module.exports = { createTodo, getAllTodo, updateTodo, deleteTodo }