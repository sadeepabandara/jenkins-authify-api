const request = require('supertest');
const express = require('express');
const userRoutes = require('../src/routes/user');

const app = express();
app.use(express.json());
app.use('/api', userRoutes);

describe('User API', () => {
  it('should register a user', async () => {
    const res = await request(app)
      .post('/api/register')
      .send({ username: 'john', password: 'secret' });
    expect(res.statusCode).toBe(201);
  });

  it('should login with correct credentials', async () => {
    await request(app).post('/api/register').send({ username: 'jane', password: '123456' });
    const res = await request(app)
      .post('/api/login')
      .send({ username: 'jane', password: '123456' });
    expect(res.statusCode).toBe(200);
  });

  it('should reject invalid login', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({ username: 'nonexistent', password: 'nope' });
    expect(res.statusCode).toBe(400);
  });
});
