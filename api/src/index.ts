import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get('/ping', (_req, res) => {
  console.log('pinged');
  res.send('pong');
})

app.listen(PORT, () => {
  console.log(`app running on port: ${PORT}`);
});
