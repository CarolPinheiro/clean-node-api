import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Carol',
        email: 'carol@mail.com',
        password: '1234',
        passwordConfirmation: '1234'
      })
      .expect(200)
  })
})
