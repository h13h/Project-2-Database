const mongoose = require('mongoose');
const Job = require('./models/Job');

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
    { company: "Wealthsimple", position: "Junior DevOps Engineer", status: "Applied", appliedDate: new Date(), notes: "Added by Hitesh" },
    { company: "PointClickCare", position: "React Frontend Developer", status: "Applied", appliedDate: new Date(), notes: "Added by Hitesh" },
    { company: "Ceridian Canada", position: "Software QA Analyst", status: "Interview", appliedDate: new Date(), notes: "Added by Hitesh" },
    { company: "Nuvei", position: "Full Stack Engineer", status: "Offer", appliedDate: new Date(), notes: "Added by Hitesh" },
    { company: "Thomson Reuters", position: "Node.js Developer", status: "Applied", appliedDate: new Date(), notes: "Added by Hitesh" },
    { company: "Think Research", position: "Junior Software Tester", status: "Rejected", appliedDate: new Date(), notes: "Added by Hitesh" },
    { company: "Wattpad", position: "Junior Frontend Developer", status: "Interview", appliedDate: new Date(), notes: "Added by Hitesh" },
    { company: "Flipp", position: "Data Integration Engineer", status: "Applied", appliedDate: new Date(), notes: "Added by Hitesh" },
    { company: "Klick Health", position: "CMS Developer", status: "Applied", appliedDate: new Date(), notes: "Added by Hitesh" },
    { company: "SkipTheDishes", position: "React Native Developer", status: "Offer", appliedDate: new Date(), notes: "Added by Hitesh" },
    { company: "FreshBooks", position: "Junior Mobile Developer", status: "Applied", appliedDate: new Date(), notes: "Added by Hitesh" },
    { company: "Neo Financial", position: "API Developer", status: "Applied", appliedDate: new Date(), notes: "Added by Hitesh" },
    { company: "1Password", position: "Cloud Engineer Intern", status: "Interview", appliedDate: new Date(), notes: "Added by Hitesh" },
    { company: "Lynk Global", position: "DevSecOps Analyst", status: "Applied", appliedDate: new Date(), notes: "Added by Hitesh" },
    { company: "Bench Accounting", position: "Junior Backend Developer", status: "Rejected", appliedDate: new Date(), notes: "Added by Hitesh" },
  
  ];
  

  try {
    await Job.insertMany(jobs);
    console.log('✅ 20 jobs inserted for Hitesh');
  } catch (err) {
    console.error('❌ Error inserting jobs:', err);
  } finally {
    mongoose.connection.close();
  }
};
