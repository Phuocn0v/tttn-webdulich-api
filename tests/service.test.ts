import dotenv from 'dotenv';
import app from '../app'
import request from 'supertest'
import makeDatabase from '../database';

dotenv.config();

describe('SERVICE TEST', () => {
    let database: any;
    beforeAll(async () => {
        database = await makeDatabase(process.env.DATABASE_URL_TEST == undefined ? "" : process.env.DATABASE_URL_TEST);
    })
    afterAll(async () => {
        database.close()
    })
})