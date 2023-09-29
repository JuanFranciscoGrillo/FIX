const express = require('express');
const router = express.Router();
const { SubContractor } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const subContractors = await SubContractor.findAll();
    res.json(subContractors);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newSubContractor = await SubContractor.create(req.body);
    res.status(201).json(newSubContractor);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const subContractor = await SubContractor.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(subContractor);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const subContractor = await SubContractor.destroy({
      where: {
       
