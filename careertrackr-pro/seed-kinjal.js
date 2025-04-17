// seed-kinjal.js
const mongoose = require('mongoose');
const Job = require('./models/Job'); // Adjust the path if needed

mongoose.connect('mongodb://127.0.0.1:27017/careertrackr', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Connected to MongoDB');
  insertJobs();
}).catch(err => {
  console.error('❌ MongoDB connection error:', err);
});

const insertJobs = async () => {
  const jobs = [];

  for (let i = 1; i <= 20; i++) {
    jobs.push({
      company: `Kinjal Tech ${i}`,
      position: `Frontend Dev ${i}`,
      status: ['Applied', 'Interview', 'Offer', 'Rejected'][Math.floor(Math.random() * 4)],
      appliedDate: new Date(),
      notes: `Added by Kinjal`
    });
  }

  try {
    await Job.insertMany(jobs);
    console.log('✅ 20 jobs inserted for Kinjal');
  } catch (err) {
    console.error('❌ Error inserting jobs:', err);
  } finally {
    mongoose.connection.close();
  }
};
