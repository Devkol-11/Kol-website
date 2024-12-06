import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Route to serve home.html
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/home.html'));
});

export default router;
