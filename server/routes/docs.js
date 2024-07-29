const express = require('express');
const Document = require('../models/Document');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const docs = await Document.find();
        res.json(docs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    console.log(req.body)
    console.log(req.body.itemArray)
    const document = new Document({
        id: req.body.id,
        title: req.body.title,
        itemArray: req.body.itemArray
    });
console.log(document)
    try {
        const newDocument = await document.save();
        res.status(201).json(newDocument);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post('/bulk', async (req, res) => {
    console.log(req.body.docs)
    try {
        const docs = await Document.insertMany(req.body.docs);
        res.status(201).json(docs);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;