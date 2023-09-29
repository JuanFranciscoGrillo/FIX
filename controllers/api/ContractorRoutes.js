const express = require('express');
const router = express.Router();
const { Contractor } = require('../../models');

// Get all contractors
router.get('/', async (req, res) => {
    try {
        const contractors = await Contractor.findAll();
        res.json(contractors);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Add a new contractor
router.post('/', async (req, res) => {
    try {
        const newContractor = await Contractor.create(req.body);
        res.status(201).json(newContractor);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update a contractor by id
router.put('/:id', async (req, res) => {
    try {
        const contractor = await Contractor.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.json(contractor);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete a contractor by id
router.delete('/:id', async (req, res) => {
    try {
        const contractor = await Contractor.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json(contractor);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
