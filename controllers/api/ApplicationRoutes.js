const express = require('express');
const router = express.Router();
const Application = require('../../db/models/application');

// Get All Applications
router.get('/', async (req, res) => {
    try {
        const applications = await Application.findAll();
        res.json(applications);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get a Single Application
router.get('/:id', async (req, res) => {
    try {
        const application = await Application.findByPk(req.params.id);
        if (!application) res.status(404).json({ message: 'Application not found' });
        res.json(application);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a New Application
router.post('/', async (req, res) => {
    try {
        const newApplication = await Application.create(req.body);
        res.status(201).json(newApplication);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update an Application
router.put('/:id', async (req, res) => {
    try {
        const updated = await Application.update(req.body, { where: { id: req.params.id } });
        if (!updated[0]) return res.status(404).json({ message: 'Application not found' });
        res.json({ message: 'Application updated' });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete an Application
router.delete('/:id', async (req, res) => {
    try {
        await Application.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Application deleted' });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
