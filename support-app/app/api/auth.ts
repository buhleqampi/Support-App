// import { Request, Response } from 'express';

// import bcrypt from 'bcrypt';
// import { connectToDatabase } from './db';
// import jwt from 'jsonwebtoken';

// const secretKey = 'yourSecretKey'; // Change this to a secure random key

// const hashPassword = async (password: string): Promise<string> => {
//   const saltRounds = 10;
//   return bcrypt.hash(password, saltRounds);
// };

// const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
//   return bcrypt.compare(password, hashedPassword);
// };

// const createToken = (userId: string): string => {
//   return jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
// };

// const verifyToken = (token: string): string | object => {
//   return jwt.verify(token, secretKey);
// };

// const authenticateUser = async (req: Request, res: Response, next: () => void): Promise<void> => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   try {
//     const decodedToken = verifyToken(token) as { userId: string };

//     // Check if the user exists in the database
//     const [rows] = await dbConnection.query('SELECT * FROM users WHERE id = ?', [decodedToken.userId]);

//     if (!rows.length) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }

//     req.userId = decodedToken.userId;
//     next();
//   } catch (error) {
//     console.error('Error verifying token:', error);
//     return res.status(401).json({ message: 'Unauthorized' });
//   }
// };

// export { hashPassword, comparePassword, createToken, authenticateUser };
