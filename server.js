import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import homeRoutes from './routes/home.js';
import aboutRoutes from './routes/about.js';

const app = express();
const PORT = 3000;

// Get the current directory name (needed for ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', homeRoutes); // Home route
app.use('/about', aboutRoutes); // About route

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
