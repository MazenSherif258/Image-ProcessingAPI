import app from '../../..';
import supertest from 'supertest';

const requset = supertest(app);

describe('Tests api/images endpoint', async () => {
  it('expect to get api/images endpoint', async () => {
    const response = await requset.get('/api/images');
    expect(response.status).toBe(200);
  });
});
