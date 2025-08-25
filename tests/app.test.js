const request = require('supertest');
const app = require('../app');

describe('App basic endpoints', () => {
  it('GET /healthz -> 200 {status:ok}', async () => {
    const res = await request(app).get('/healthz');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  it('GET / -> hello text', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toMatch(/Node WebApp/i);
  });
});
