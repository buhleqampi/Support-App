// import { apiRoutes } from './routes';
// import { authMiddleware } from './middleware';

// import { connectToDatabase } from './db';

// import cookieParser from 'cookie-parser';
// import express from 'express';

// const app = express();
// const PORT = process.env.PORT || 3000;

// let dbConnection;

// // Connect to MySQL database
// connectToDatabase()
//   .then((connection) => {
//     dbConnection = connection;
//   })
//   .catch((error) => {
//     console.error('Error connecting to MySQL database:', error);
//   });

// app.use(express.json());
// app.use(cookieParser());

// // Use authentication middleware for all API routes
// app.use('/api', authMiddleware);

// // Define API routes
// app.use('/api', apiRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
