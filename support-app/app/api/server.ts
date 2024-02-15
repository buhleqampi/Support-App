import { connectToDatabase } from './db';
import cookieParser from 'cookie-parser';
import express, { Application } from 'express';
import { Pool, PoolConnection } from 'mysql2';


const app: Application = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;



let dbConnection: Pool | PoolConnection;

// Connect to MySQL database
connectToDatabase()
    .then((connection) => {
        PoolConnection = connection;
    })
    .catch((error) => {
        console.error('Error connecting to MySQL database:', error);
    });

    app.use(express.json());
    app.use(cookieParser());

    // Use authentication middleware for all API routes
    app.use('/api', authMiddleware); // Assuming authMiddleware is defined somewhere

    // Define API routes
    app.use('/api', apiRoutes); // Assuming apiRoutes is defined somewhere

    app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    });
