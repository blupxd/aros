const express = require('express')
const router = express.Router()
const Parfem = require('../models/ParfemModel')
const jwt = require('jsonwebtoken')

router.use(express.json());

function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ error: 'Unauthorized - Token not provided' });
    }

    const [scheme, token] = authHeader.split(' ');

    if (scheme !== 'Bearer' || !token) {
        return res.status(401).json({ error: 'Unauthorized - Invalid authorization header format' });
    }

    jwt.verify(token, process.env.TAJNI_KLJUC, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden - Invalid token' });
        }
        req.user = user;
        next();
    });
}


router.get('/', async (req,res) => {
    try {
        const parfemi = await Parfem.find()
        if(!parfemi){
            return res.status(404).send('Nema parfema')
        }
        res.status(200).send(parfemi)
    } catch (error) {
        console.error('Error getting perfumes:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const parfem = await Parfem.findById(req.params.id);
        if (!parfem) {
            return res.status(404).json({ error: 'Perfume not found.' });
        }
        res.status(200).json(parfem);
    } catch (error) {
        console.error('Error getting perfume:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/', verifyToken , async (req,res) => {
    try {
        const { naziv, kuca, tip } = req.body;
        console.log(naziv,kuca,tip)
        if (naziv && kuca && tip) {
            const newParfem = new Parfem({
                naziv: naziv,
                kuca: kuca,
                tip: tip
            });

            const savedParfem = await newParfem.save();
            res.status(200).json(savedParfem);
        } else {
            res.status(400).json({ error: 'Incomplete data provided.' });
        }
    } catch (error) {
        console.error('Error saving parfem:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
router.put('/:id',verifyToken, async (req, res) => {
    try {
        const { naziv, kuca, tip } = req.body;
        if (naziv && kuca && tip) {
            const updatedParfem = await Parfem.findByIdAndUpdate(
                req.params.id,
                { naziv, kuca, tip },
                { new: true }
            );

            if (!updatedParfem) {
                return res.status(404).json({ error: 'Parfem nije pronađen.' });
            }

            res.status(200).json(updatedParfem);
        } else {
            res.status(400).json({ error: 'Nepotpuni podaci.' });
        }
    } catch (error) {
        console.error('Error updating parfem:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/:id',verifyToken, async (req, res) => {
    try {
        const deletedParfem = await Parfem.findByIdAndDelete(req.params.id);

        if (!deletedParfem) {
            return res.status(404).json({ error: 'Parfem nije pronađen.' });
        }

        res.status(200).json({ message: 'Parfem uspešno obrisan.' });
    } catch (error) {
        console.error('Error deleting parfem:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;