import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import connectDB from './config/db';

connectDB();  // Connect to MongoDB

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(json());

// Define routes
app.use('/api', require('./routes'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
