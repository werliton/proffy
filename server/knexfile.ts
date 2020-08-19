import path from 'path'
import 'dotenv/config'

module.exports = {
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'docker',
        database: 'proffy'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true
}