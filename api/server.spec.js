const request = require('supertest');
const server = require('./server');
const db = require('../database/dbConfig');

const testUser = {username: 'testing', password: 'testing'}


describe('user registration', () => {
    it('should return a status code of 201 when adding a new user', async () => {
        await db('users').truncate()
        const res =  await request(server)
        .post('/api/auth/register')
        .send(testUser);
        expect(res.status).toBe(201)
    });
    it('should return a status code of 500 with an invalid user', async () => {
        const res = await request(server)
        .post('/api/auth/register')
        .send({user: "test", pass: "jabroni" });
        expect(res.status).toBe(400);
    })
});


describe('login with user', () => {
    it('should return status of 200 with test user', async () => {
        const res = await request(server).post('/api/auth/login')
        .send(testUser);
        expect(res.status).toBe(200)
    })
    it('should return 401 with invalid user', async () => {
        const res = await request(server).post('/api/auth/login')
        .send({ username: 'does not exist', password: 'never entered' })
        expect(res.status).toBe(401)
    })
})





