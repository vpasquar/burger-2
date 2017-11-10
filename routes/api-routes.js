var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/", function(req, res) {
      db.Burger.findAll({}).then(function(result) {
        var hbsObject = {
          burgers:result
        }
         //res.json(result);
         res.render("index",hbsObject);  
      });

  });

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post("/api/burgers", function(req, res) {
    db.Burger.create({
      burger_name: req.body.name,
      devoured: 0
    }).then(function(result) {
       res.end();
       //res.json({ id: result.insertId });
    });

  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  // app.delete("/api/burgers/:id", function(req, res) {
  //   db.Burger.destroy({
  //      where: {
  //        id: req.body.id
  //      }
  //   });

  // });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/burgers/:id", function(req, res) {
    db.Burger.update({
      devoured: req.body.devoured
    }, {
       where: {
          id:req.params.id
       }
    }).then(function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }  
    });
  });
};