const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');
const OutfitScan = require('../models/OutfitScan');
const QuizResult = require('../models/QuizResult');
const auth = require('../middleware/auth');

// GET /api/profile/:userId
router.get('/:userId', auth, async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(200).json({ 
        user: { name: 'User', email: '', level: 'Starter', streak: 0, xp: 0, nextLevelXp: 1000 }, 
        stats: { scans: 0, quizzes: 0 } 
      });
    }

    const user = await User.findById(req.params.userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    const scanCount = await OutfitScan.countDocuments({ userId: req.params.userId });
    const quizCount = await QuizResult.countDocuments({ userId: req.params.userId });

    res.status(200).json({ user, stats: { scans: scanCount, quizzes: quizCount } });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile' });
  }
});

// PUT /api/profile/:userId
router.put('/:userId', auth, async (req, res) => {
  const { name, level } = req.body;

  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (name) user.name = name;
    if (level) user.level = level;

    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error: error.message });
  }
});

module.exports = router;
