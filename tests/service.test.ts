import dotenv from 'dotenv';
import app from '../app'
import request from 'supertest'
import makeDatabase from '../database';
import serviceSchema from '../schema/service';
import mongoose from 'mongoose';

dotenv.config();

describe('SERVICE TEST', () => {
    let database: any;
    beforeAll(async () => {
        database = await makeDatabase(process.env.DATABASE_URL_TEST == undefined ? "" : process.env.DATABASE_URL_TEST);
    })
    afterAll(async () => {
        database.close()
    })
    // CURD TEST
    it('GET /service', async () => {
        const response = await request(app).get('/service')
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('services')
    })
    
    it('POST /service', async () => {
        const response = await request(app).post('/service').send({
            name: "test",
            description: "test",
            price: 1000,
            unitType: "ticket"
        })
        expect(await serviceSchema.findOne({ name: "test" })).not.toBeNull()
        await serviceSchema.findOneAndDelete({ name: "test" })
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('message')
    })
    
    it('PUT /service', async () => {
        // Create new service
        const service = new serviceSchema({
            _id: new mongoose.Types.ObjectId(),
            name: "test",
            description: "test",
            price: 1000,
            unitType: "ticket"
        })
        service.save()
        // Update service
        const response2 = await request(app).put('/service/' + service?._id).send({
            name: "test_update",
            description: "test",
            price: 2000,
            unitType: "ticket"
        })
        expect(response2.status).toBe(200)
        expect(response2.body).toHaveProperty('message')
        expect(await serviceSchema.findOne({ name: "test_update" })).not.toBeNull()
        expect(await serviceSchema.findOne({ name: "test" })).toBeNull()
        await serviceSchema.findOneAndDelete({ name: "test_update" })
    })
    
    it('DELETE /service', async () => {
        // Create new service
        const service = new serviceSchema({
            _id: new mongoose.Types.ObjectId(),
            name: "test",
            description: "test",
            price: 1000,
            unitType: "ticket"
        })
        service.save()
        // Delete service
        const response2 = await request(app).delete('/service/' + service?._id).send()
        expect(response2.status).toBe(200)
        expect(response2.body).toHaveProperty('message')
        expect(await serviceSchema.findOne({ name: "test" })).toBeNull()
    })
    
    it('PUT /service not existed', async () => {
        const response = await request(app).put('/service/notexisted_id').send({
            name: "test_update",
            description: "test",
            price: 2000,
            unitType: "ticket"
        })
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('message')
    })
    
    it('DElETE /service not existed', async () => {
        const response = await request(app).delete('/service/notexisted_id')
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('message')
    })
})