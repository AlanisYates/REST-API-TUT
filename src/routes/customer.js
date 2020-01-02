let CustomerModel = require("../models/customer.model");
let express = require("express");
let router = express.Router();

// Create a new Customer
// POST localhost:3000/customer
router.post("/customer", (req, res) => {
  // req.body
  if (!req.body) {
    res.status(400).send("Request body is missing");
  }

  //   let user = {
  //       name: 'FIrstname lastname',
  //       email: 'example.gmail.com'
  //   }

  let model = new CustomerModel(req.body);
  model
    .save()
    .then(doc => {
      if (!doc || doc.length === 0) {
        res.status(500).send(doc);
      }

      res.status(201).send(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// GET
router.get("/customer", (req, res) => {
  if (!req.query.email) {
    return res.status(400).send("Missing URL parameter: email");
  }
  CustomerModel.findOne({
    email: req.query.email
  })
    .then(doc => {
      res.json(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Update
router.put("/customer", (req, res) => {
  if (!req.query.email) {
    return res.status(400).send("Missing URL parameter: email");
  }
  CustomerModel.findOneAndUpdate(
    {
      email: req.query.email
    },
    req.body,
    {
      new: true
    }
  )
    .then(doc => {
      res.json(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// DELETE
router.delete("/customer", (req, res) => {
  if (!req.query.email) {
    return res.status(400).send("Missing URL parameter: email");
  }
  CustomerModel.findOneAndRemove({
    email: req.query.email
  })
    .then(doc => {
      res.json(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
