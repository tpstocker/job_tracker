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
    const db = client.db("jobs");
    const applicationsCollection = db.collection("applications");
    const applicationsRouter = createRouter(applicationsCollection);
    app.use("/api/applications", applicationsRouter);
  })
  .catch(console.err);

app.listen(5000, function () {
  console.log(`Listening on port ${this.address().port}`);
});