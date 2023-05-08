
const db = require("../models");
const Todo = db.todos;
const Op = db.Sequelize.Op;

// Create and Save a new Todo
exports.create = (req, res) => {
  // Validate request
  if (!req.body.eventName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  console.log('itsWorking');

  // Create a Todo
  const todo = {
    eventName: req.body.eventName,
    discription: req.body.discription,
      date: req.body.date
  };

  // Save Todo in the database
  Todo.create(todo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Todo."
      });
    });
};

// Retrieve all Todos from the database.
exports.findAll = (req, res) => {
    const eventName = req.query.eventName;
    var condition = eventName ? { eventNames: { [Op.like]: `%${eventName}%` } } : null;
  
    Todo.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Todos."
        });
      });
  };
  
  // Find a single Todo with an id
  exports.findOne = (req, res) => {
    const id = req.params.todoId;
  
    Todo.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Todo with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Todo with id=" + id
        });
      });
  };

// Update a Todo by the id in the request
exports.update = (req, res) => {
  const id = req.body.todoId;

  Todo.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Todo was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Todo with id=${id}. Maybe Todo was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Todo with id=" + id
      });
    });
};


  exports.delete = (req, res) => {
    const id = req.params.todoId;
  
    Todo.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Todo was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Todo with id=${id}. Maybe Todo was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Todo with id=" + id
        });
      });
  };
  
