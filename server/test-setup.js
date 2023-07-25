const mongoose = require('mongoose');

// Connect to the test database once before all test cases
beforeAll(async () => {
  const uri = 'mongodb://localhost:27017/test';
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
});

// Clean up the database after all test cases are done
afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

module.exports = mongoose; // Export the mongoose connection for reuse in tests
