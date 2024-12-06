import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.render('about.ejs'); // Render the 'home.ejs' view
});

export default router;
