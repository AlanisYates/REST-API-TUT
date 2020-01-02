// Reference express
let express = require("express");
let router = express.Router();

// Query string => query property on the test Object
// localhost:3000/person?name=Thomas&age=20
router.get("/person", (req, res) => {
  if (req.query.name) {
    res.send(`You have requested a person ${req.query.name}`);
  }
  res.send("You have requested a person");
});

// Params property on the request object
// localhost:3000/person/thomas
router.get("/person/:name", (req, res) => {
  res.send(`You have requested a person ${req.params.name}`);
});

router.get('/error', (req, res) => {
    throw new Error('This is a forced Error')
})

module.exports = router;
