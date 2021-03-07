use jobs;
db.dropDatabase();

db.applications.insertMany([
  {
    company: "Tom's Dev Co.",
    role: "Junior Dev",
    closing_date: "tbc"
  },
]);