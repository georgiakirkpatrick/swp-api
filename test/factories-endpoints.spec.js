const knex = require('knex')
const app = require('../src/app')
const { makeFactoriesArray, makeMaliciousFactory } = require('./factories.fixtures')
const supertest = require('supertest')
const { expect } = require('chai')

describe('Factories Endpoints', function() {
    let db

    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL,
        })
        app.set('db', db)
    })

    after('disconnect from db', () => db.destroy())

    before('clean the table', () => db.raw('TRUNCATE table factories RESTART IDENTITY CASCADE'))
    
    afterEach('cleanup', () => db.raw('TRUNCATE table factories RESTART IDENTITY CASCADE'))
})