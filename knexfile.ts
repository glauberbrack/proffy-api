import path from 'path';

module.exports = {
    client: 'pg',
    connection: {
        host: 'localhost',
        database: 'proffy',
        user: 'postgres',
        password: '0000'
    },

    migrations: {
        tableName: 'knex_migrations',
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
}