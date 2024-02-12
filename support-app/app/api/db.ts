    import { Connection, createConnection } from 'mysql2';

    const dbConfig = {
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database',
    };

    const connectToDatabase = async (): Promise<Connection> => {
    const connection = await createConnection(dbConfig);
    console.log('Connected to MySQL database');
    return connection;
    };

    export { connectToDatabase };
