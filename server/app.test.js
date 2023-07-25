const request = require('supertest');
const app = require('./app');
const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.cwczcnp.mongodb.net/Items?retryWrites=true&w=majority';

let db;

beforeAll(async () => {
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = mongoose.connection;
});

afterAll(async () => {
  await db.close();
});

// Sample item data to use in the test
const sampleItem = {
  itemName: 'Test Item',
  description: 'This is a test item.',
  price: 10.99,
  image: 'test-image.jpg',
  quantity: 10,
};

describe('API Endpoints', () => {
  it('should add a new item', async () => {
    const response = await request(app)
      .post('/api/items/add')
      .send(sampleItem);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.itemName).toBe(sampleItem.itemName);
    expect(response.body.description).toBe(sampleItem.description);
    expect(response.body.price).toBe(sampleItem.price);
    expect(response.body.image).toBe(sampleItem.image);
  });

  it('should get all items', async () => {
    const response = await request(app).get('/api/items');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(1);
    expect(response.body[0].itemName).toBe(sampleItem.itemName);
  });

  it('should delete an item', async () => {
    const response = await request(app).delete(`/api/items/${sampleItem.itemName}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.deletedCount).toBe(1);
  });
});
