const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    aflterAll(async () => {
        await connection.destroy();
    })

    it('shold be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: "APAD2",
            email: "apad2@email.com",
            whatsapp: "1999999999",
            city: "VGS",
            uf: "SP"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);

    })
})