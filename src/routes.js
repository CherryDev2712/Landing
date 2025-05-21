import express from 'express';
import { title } from 'process';

const router = express.Router();

// Ruta para renderizar inicio.ejs
router.get('/', (req, res) => {
    res.render('inicio', {
        title: 'Landing Page'
    });
});

export default router;