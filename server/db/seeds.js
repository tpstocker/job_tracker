use jobs;
db.dropDatabase();

db.applications.insertMany([
  {
    company: "Tom's Dev Co.",
    url: "http://urltojobhere.co.uk",
    role: "Junior Dev",
    closing_date: "tbc",
    email: "mrhiringmanager@job.com",
  },
]);