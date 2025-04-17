const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.get('/', async (req, res) => {
  const jobs = await Job.find();
  const total = jobs.length;
  const applied = jobs.filter(j => j.status === 'Applied').length;
  const interviews = jobs.filter(j => j.status === 'Interview').length;
  const offers = jobs.filter(j => j.status === 'Offer').length;
  const rejections = jobs.filter(j => j.status === 'Rejected').length;

  res.render('dashboard', { total, applied, interviews, offers, rejections });
});

module.exports = router;
