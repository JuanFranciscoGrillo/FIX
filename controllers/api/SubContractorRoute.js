const router = require('express').Router();
const { SubContractor } = require('../../models');

// Register a new subcontractor
router.post('/', async (req, res) => {
  try {
    const newSubContractor = await SubContractor.create(req.body);
    res.status(201).json(newSubContractor);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all subcontractors
router.get('/', async (req, res) => {
  try {
    const subContractorData = await SubContractor.findAll();
    res.status(200).json(subContractorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single subcontractor by its id
router.get('/:id', async (req, res) => {
  try {
    const subContractorData = await SubContractor.findByPk(req.params.id);
    if (!subContractorData) {
      res.status(404).json({ message: 'No subcontractor found with that id!' });
      return;
    }
    res.status(200).json(subContractorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a subcontractor by its id
router.put('/:id', async (req, res) => {
  try {
    const subContractorData = await SubContractor.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!subContractorData[0]) {
      res.status(404).json({ message: 'No subcontractor found with that id!' });
      return;
    }
    res.status(200).json(subContractorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a subcontractor by its id
router.delete('/:id', async (req, res) => {
  try {
    const subContractorData = await SubContractor.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!subContractorData) {
      res.status(404).json({ message: 'No subcontractor found with that id!' });
      return;
    }
    res.status(200).json(subContractorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
