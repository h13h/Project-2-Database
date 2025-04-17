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
  const jobs = [

  { company: "Myant", position: "IoT Software Developer", status: "Applied", appliedDate: new Date(), notes: "Added by Kinjal" },
    { company: "Ecobee", position: "Python Developer", status: "Applied", appliedDate: new Date(), notes: "Added by Kinjal" },
    { company: "League", position: "Software Developer in Test", status: "Interview", appliedDate: new Date(), notes: "Added by Kinjal" },
    { company: "Borrowell", position: "Junior UI Developer", status: "Applied", appliedDate: new Date(), notes: "Added by Kinjal" },
    { company: "Top Hat", position: "Platform Engineer", status: "Offer", appliedDate: new Date(), notes: "Added by Kinjal" },
    { company: "Geotab", position: "Software Support Developer", status: "Applied", appliedDate: new Date(), notes: "Added by Kinjal" },
    { company: "Xanadu", position: "Quantum Software Intern", status: "Applied", appliedDate: new Date(), notes: "Added by Kinjal" },
    { company: "Lightspeed HQ", position: "Frontend Angular Developer", status: "Interview", appliedDate: new Date(), notes: "Added by Kinjal" },
    { company: "Zensurance", position: "Infrastructure Engineer", status: "Rejected", appliedDate: new Date(), notes: "Added by Kinjal" },
    { company: "Fiix Software", position: "Software Integration Tester", status: "Applied", appliedDate: new Date(), notes: "Added by Kinjal" },
    { company: "MindBeacon", position: "React JS Intern", status: "Applied", appliedDate: new Date(), notes: "Added by Kinjal" },
    { company: "WealthBar", position: "Node/Express Developer", status: "Offer", appliedDate: new Date(), notes: "Added by Kinjal" },
    { company: "Drop Technologies", position: "AI Assistant Engineer", status: "Applied", appliedDate: new Date(), notes: "Added by Kinjal" },
    { company: "Ada Support", position: "Machine Learning Intern", status: "Interview", appliedDate: new Date(), notes: "Added by Kinjal" },
    { company: "ApplyBoard", position: "Technical Support Developer", status: "Applied", appliedDate: new Date(), notes: "Added by Kinjal" }
];

  try {
    await Job.insertMany(jobs);
    console.log('✅ 20 jobs inserted for Kinjal');
  } catch (err) {
    console.error('❌ Error inserting jobs:', err);
  } finally {
    mongoose.connection.close();
  }
};
