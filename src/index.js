// Refrence the express library
let express = require("express");
let app = express();
// reference routes ENDPOINTS
let personRoute = require("./routes/person");
let customerRoute = require("./routes/customer");
let path = require("path");
// Referncing body parser for json stuff
let bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
  next();
});

app.use(personRoute);
app.use(customerRoute);
app.use(express.static("public"));

// Handle for 404 - Resouce Not found
app.use((req, res, next) => {
  res.status(404).send("We think you are lost!");
});

// Handle 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  // Serving the 500.html as a response
  res.status(500).sendFile(path.join(__dirname, "../public/500.html"));
});

// Starting the Server.
const PORT = process.env.port || 3000;
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));
