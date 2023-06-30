import dotenv from 'dotenv';
import app from '../app'
import request from 'supertest'
import makeDatabase from '../database';
import accountSchema from '../schema/account';

dotenv.config();
describe('AUTHORATION TEST', () => {
  let database: any;
  beforeAll(async () => {
    database = await makeDatabase(process.env.DATABASE_URL_TEST == undefined ? "" : process.env.DATABASE_URL_TEST);
  })
  afterAll(async () => {
    database.close()
  })

  describe('LOGIN TEST', () => {
    it('Login with valid username and password', async () => {
      const res = await request(app)
        .post('/auth/login')
        .send({
          usernameOrEmail: 'phuocnov',
          password: '123456'
        })
      expect(res.status).toEqual(200)
      expect(res.body).toHaveProperty('token')
    })

    it('Login with invalid username and password', async () => {
      const res = await request(app)
        .post('/auth/login')
        .send({
          usernameOrEmail: 'phuocnov',
          password: '1234567'
        })
      expect(res.status).toEqual(401)
      expect(res.body).toHaveProperty('message')
    })
  })

  describe('REGISTER TEST', () => {
    it('Register with valid username and password', async () => {
      const res = await request(app)
        .post('/auth/register')
        .send({
          username: "username1",
          email: "email1@gmail.com",
          password: "123456",
          firstName: "Nguyen Huu",
          lastName: "Phuoc"
        })
      await accountSchema.findOneAndDelete({ username: 'username1' })
      expect(res.status).toEqual(200)
      expect(res.body).toHaveProperty('message')
    })

    it('Register with invalid username', async () => {
      const res = await request(app)
        .post('/auth/register')
        .send({
          username: 'phuocnov',
          email: 'email@email.com',
          password: '123456',
          firstName: 'firstName',
          lastName: 'lastName'
        })
      expect(res.status).toEqual(400)
      expect(res.body).toHaveProperty('message')
    })
    it('Register with invalid email', async () => {
      const res = await request(app)
        .post('/auth/register')
        .send({
          username: 'username2',
          email: 'phuocnguyenhuu806@gmail.com',
          password: '123456',
          firstName: 'firstName',
          lastName: 'lastName'
        })
      await accountSchema.findOneAndDelete({ username: 'username2' })
      expect(res.status).toEqual(400)
      expect(res.body).toHaveProperty('message')
    })
  })

})

