import knex from 'knex';
import path from 'path';

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        database: 'proffy',
        user: 'postgres',
        password: '0000'
    },

    migrations: {
        tableName: 'knex_migrations'
    }
})

export default db;