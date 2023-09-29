const router = require('express').Router();
const { Contractor } = require('../../models');

// Create a new contractor
router.post('/', async (req, res) => {
  try {
    const newContractor = await Contractor.create(req.body);
    res.status(201).json(newContractor);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all contractors
router.get('/', async (req, res) => {
  try {
    const contractorData = await Contractor.findAll();
    res.status(200).json(contractorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single contractor by its id
router.get('/:id', async (req, res) => {
  try {
    const contractorData = await Contractor.findByPk(req.params.id);
    if (!contractorData) {
      res.status(404).json({ message: 'No contractor found with that id!' });
      return;
    }
    res.status(200).json(contractorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a contractor by its id
router.put('/:id', async (req, res) => {
  try {
    const contractorData = await Contractor.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!contractorData[0]) {
      res.status(404).json({ message: 'No contractor found with that id!' });
      return;
    }
    res.status(200).json(contractorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a contractor by its id
router.delete('/:id', async (req, res) => {
  try {
    const contractorData = await Contractor.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!contractorData) {
      res.status(404).json({ message: 'No contractor found with that id!' });
      return;
    }
    res.status(200).json(contractorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
