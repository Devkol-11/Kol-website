import { Router } from 'express';
import nodemailer from 'nodemailer';

const router = Router();

router.get('/', (req, res) => {
    res.render('contact');
});

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password',
        },
    });

    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com',
        subject: `Message from ${name}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.send('Message sent successfully!');
    } catch (error) {
        console.error(error);
        res.send('There was an error sending your message.');
    }
});

export default router;
