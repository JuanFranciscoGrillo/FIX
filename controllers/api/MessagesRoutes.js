const express = require('express');
const router = express.Router();
const { Message } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const messages = await Message.findAll();
    res.json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const message = await Message.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(message);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const message = await Message.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(message);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
