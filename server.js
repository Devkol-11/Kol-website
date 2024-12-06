import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyParser from 'body-parser';

import aboutRoute from './routes/about.js';
import homeRoute from './routes/home.js'
import contactRoute from './routes/contact.js'

const app = express()
const PORT = 3000

// Get the current directory name (similar to __dirname in CommonJS)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home');  // This will render home.ejs in the views folder
  });

app.use('/about', aboutRoute);
app.use('/home', homeRoute);
app.use('/contact', contactRoute);


app.listen(PORT ,()=>{
    console.log(`server running on PORT ${PORT}`)
})