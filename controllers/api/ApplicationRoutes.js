const router = require('express').Router();
const { Application } = require('../../models');

// Create a new application
router.post('/', async (req, res) => {
  try {
    const newApplication = await Application.create(req.body);
    res.status(201).json(newApplication);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all applications
router.get('/', async (req, res) => {
  try {
    const applicationsData = await Application.findAll();
    res.status(200).json(applicationsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single application by its id
router.get('/:id', async (req, res) => {
  try {
    const applicationData = await Application.findByPk(req.params.id);
    if (!applicationData) {
      res.status(404).json({ message: 'No application found with that id!' });
      return;
    }
    res.status(200).json(applicationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update an application by its id
router.put('/:id', async (req, res) => {
  try {
    const applicationData = await Application.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!applicationData[0]) {
      res.status(404).json({ message: 'No application found with that id!' });
      return;
    }
    res.status(200).json(applicationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete an application by its id
router.delete('/:id', async (req, res) => {
  try {
    const applicationData = await Application.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!applicationData) {
      res.status(404).json({ message: 'No application found with that id!' });
      return;
    }
    res.status(200).json(applicationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
