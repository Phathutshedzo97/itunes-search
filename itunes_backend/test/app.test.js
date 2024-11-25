const request = require('supertest');
const app = require('../server'); // Assuming this file is in the same directory as server.js

describe('Test iTunes Search API', () => {
  test('should return 200 OK', async () => {
    const response = await request(app).get('/api/search/some-term/all');
    expect(response.statusCode).toBe(200);
  });
});
