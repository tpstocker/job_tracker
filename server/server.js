const express = require("express");
const app = express();
const parser = require('body-parser');
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router.js");

const cors = require("cors");
app.use(cors());
app.use(parser.json());

MongoClient.connect("mongodb://localhost:27017")
  .then((client) => {
    const db = client.db("guests"); //TO BE EDITED
    const bookingsCollection = db.collection("bookings"); //TO BE EDITED
    const bookingsRouter = createRouter(bookingsCollection);
    app.use("/api/bookings", bookingsRouter);
  })
  .catch(console.err);

app.listen(5000, function () {
  console.log(`Listening on port ${this.address().port}`);
});