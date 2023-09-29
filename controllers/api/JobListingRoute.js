const router = require('express').Router();
const { JobListing } = require('../../models');

// Create a new job listing
router.post('/', async (req, res) => {
  try {
    const newJobListing = await JobListing.create(req.body);
    res.status(201).json(newJobListing);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all job listings
router.get('/', async (req, res) => {
  try {
    const jobListingData = await JobListing.findAll();
    res.status(200).json(jobListingData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single job listing by its id
router.get('/:id', async (req, res) => {
  try {
    const jobListingData = await JobListing.findByPk(req.params.id);
    if (!jobListingData) {
      res.status(404).json({ message: 'No job listing found with that id!' });
      return;
    }
    res.status(200).json(jobListingData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a job listing by its id
router.put('/:id', async (req, res) => {
  try {
    const jobListingData = await JobListing.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!jobListingData[0]) {
      res.status(404).json({ message: 'No job listing found with that id!' });
      return;
    }
    res.status(200).json(jobListingData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a job listing by its id
router.delete('/:id', async (req, res) => {
  try {
    const jobListingData = await JobListing.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!jobListingData) {
      res.status(404).json({ message: 'No job listing found with that id!' });
      return;
    }
    res.status(200).json(jobListingData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
