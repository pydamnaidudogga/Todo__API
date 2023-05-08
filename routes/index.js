const express = require('express');
const router = express.Router();
const createTodo = require('../controllers/todoController');

// Create a new Todo
router.post("/todo", createTodo.create);

// Retrieve all Todos
router.get("/todo", createTodo.findAll);

// Update a Tutorial with id
router.put("/todo", createTodo.update);


// Retrieve a single Todo with id
router.get("/todo/:todoId", createTodo.findOne);

// Delete a Todo with id
router.delete("/todo/:todoId", createTodo.delete);


module.exports = router;
