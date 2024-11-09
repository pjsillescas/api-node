import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import router from './routes/routes.js';

connectDB();  // Connect to MongoDB

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Define routes
app.use('/api', router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
