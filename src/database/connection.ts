import knex from 'knex';

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        database: 'proffy',
        user: 'postgres',
        password: '0000'
    },
})

export default db;