const express = require('express');
const router = express.Router();
const { JobListing } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const jobListings = await JobListing.findAll();
    res.json(jobListings);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newJobListing = await JobListing.create(req.body);
    res.status(201).json(newJobListing);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const jobListing = await JobListing.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(jobListing);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const jobListing = await JobListing.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(jobListing);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
