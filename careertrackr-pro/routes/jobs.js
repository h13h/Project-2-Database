const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// List jobs with search, filter, sort
router.get('/', async (req, res) => {
  const { status, sort, search } = req.query;
  let filter = {};
  if (status && status !== 'All') filter.status = status;
  if (search) {
    filter.$or = [
      { company: { $regex: search, $options: 'i' } },
      { position: { $regex: search, $options: 'i' } }
    ];
  }

  let jobs = await Job.find(filter);
  if (sort === 'newest') jobs.sort((a, b) => b.appliedDate - a.appliedDate);
  if (sort === 'oldest') jobs.sort((a, b) => a.appliedDate - b.appliedDate);

  res.render('index', { jobs, search, status, sort });
});

// New job form
router.get('/new', (req, res) => {
  res.render('jobs/create');
});

// Create job
router.post('/', async (req, res) => {
  await Job.create(req.body);
  res.redirect('/jobs');
});

// Show job
router.get('/:id', async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.render('jobs/show', { job });
});

// Edit form
router.get('/:id/edit', async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.render('jobs/edit', { job });
});

// Update job
router.post('/:id', async (req, res) => {
  await Job.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/jobs');
});

// Delete job
router.post('/:id/delete', async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.redirect('/jobs');
});

module.exports = router;
