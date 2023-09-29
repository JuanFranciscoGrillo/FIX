const router = require('express').Router();
const { Message } = require('../../models');

// Send a new message
router.post('/', async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all messages
router.get('/', async (req, res) => {
  try {
    const messageData = await Message.findAll();
    res.status(200).json(messageData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single message by its id
router.get('/:id', async (req, res) => {
  try {
    const messageData = await Message.findByPk(req.params.id);
    if (!messageData) {
      res.status(404).json({ message: 'No message found with that id!' });
      return;
    }
    res.status(200).json(messageData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a message by its id
router.put('/:id', async (req, res) => {
  try {
    const messageData = await Message.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!messageData[0]) {
      res.status(404).json({ message: 'No message found with that id!' });
      return;
    }
    res.status(200).json(messageData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a message by its id
router.delete('/:id', async (req, res) => {
  try {
    const messageData = await Message.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!messageData) {
      res.status(404).json({ message: 'No message found with that id!' });
      return;
    }
    res.status(200).json(messageData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
