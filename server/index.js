import express from 'express';

import dotenv from 'dotenv';
import cors from 'cors';
import routerControl from './routers/routers.js';

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.json());

// router
routerControl(app)


app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

