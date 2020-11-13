const supertest = require('supertest');
const server = require('./server');
const db = require('../database/dbConfig');

// const testUser = {username: 'testing', password: 'testing'}
// describe('user registration', () => {
//  describe('auth-router.js', () => {
//     describe('POST /register', () => {
//         beforeEach( async () => {
//             await db('users').truncate();
//         });
//     it('should create a user', async () => {
//         const rick = await supertest(server)
//         .post('/api/auth/register')
//         .send({
//             username: 'Rick',
//             password: 'password'
//         });
//         expect(rick.body.data.username).toBe("Rick")
//         });

//         it('should return 201 status', async () => {
//             const glen = await supertest(server)
//             .post('/api/auth/register')
//             .send({
//                 username: 'Glen',
//                 password: 'password'
//             })
//             .then(res => {
//                 expect(res.status).toBe(201)
//             })
//         });
//     });

//     describe('POST /login', () => {
//         it('should login a user', async () => {
//            await supertest(server)
//             .post('/api/auth/login')
//             .send({
//                 username: 'Glen',
//                 password: 'password'
//             })
//             .then(res => {
//                 expect(res.body.message).toBe("You are now logged in.");
//                 expect(res.status).toBe(200);
//             });
//         });
//     })

// });


// describe('user registration', () => {
//     it('should return a status code of 201 when adding a new user', async () => {
//         await db('users').truncate()
//         const res =  await request(server)
//         .post('/api/auth/register')
//         .send(testUser);
//         expect(res.status).toBe(201)
//     });
//     it('should return a status code of 500 with an invalid user', async () => {
//         const res = await request(server)
//         .post('/api/auth/register')
//         .send({user: "test", pass: "jabroni" });
//         expect(res.status).toBe(500);
//     })
// });


describe('login with user', () => {
    it('should return status of 200 with test user', async () => {
        const res = await request(server)
        .post('/api/auth/login')
        .send(testUser);
        expect(res.status).toBe(200)
    })
    it('should return 401 with invalid user', async () => {
        const res = await request(server)
        .post('/api/auth/login')
        .send({ username: 'does not exist', password: 'never entered' })
        expect(res.status).toBe(401)
    })
})





