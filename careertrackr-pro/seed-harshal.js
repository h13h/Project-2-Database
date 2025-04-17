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
        { company: "RBC Royal Bank", position: "Full Stack Developer", status: "Applied", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "TD Bank Group", position: "QA Analyst", status: "Interview", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "Bell Canada", position: "React Developer", status: "Applied", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "Scotiabank", position: "Cloud Engineer", status: "Applied", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "Rogers Communications", position: "Data Analyst", status: "Offer", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "Manulife", position: "Business Analyst", status: "Rejected", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "Telus", position: "Software Engineer Intern", status: "Interview", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "Shopify", position: "Backend Developer", status: "Applied", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "Deloitte Canada", position: "Cyber Security Consultant", status: "Applied", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "KPMG Canada", position: "DevOps Engineer", status: "Interview", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "EY Canada", position: "Junior Software Developer", status: "Applied", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "PwC Canada", position: "AI Research Assistant", status: "Applied", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "CGI Group", position: "React Native Developer", status: "Applied", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "Amazon Canada", position: "Software Development Engineer", status: "Offer", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "Google Canada", position: "Cloud Infrastructure Intern", status: "Rejected", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "Microsoft Canada", position: "Technical Program Manager", status: "Applied", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "Tesla Toronto", position: "Automation Engineer", status: "Applied", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "Accenture Canada", position: "IT Analyst", status: "Interview", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "Ubisoft", position: "Game Developer Intern", status: "Applied", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "Loblaw Digital", position: "Junior UI/UX Designer", status: "Applied", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "SAP Canada", position: "Product Owner", status: "Interview", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "Sun Life Financial", position: "Web Developer", status: "Applied", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "BlackBerry", position: "Embedded Software Engineer", status: "Applied", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "OpenText", position: "IT Support Specialist", status: "Rejected", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "CIBC", position: "Data Engineer", status: "Applied", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "BMO Financial Group", position: "System Analyst", status: "Interview", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "Magna International", position: "Automation Tester", status: "Applied", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "SNC-Lavalin", position: "Junior Software Tester", status: "Applied", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "Canada Post", position: "Network Analyst", status: "Applied", appliedDate: new Date(), notes: "Added by Harshal" },
        { company: "Canadian Tire Digital", position: "Front-End Web Developer", status: "Offer", appliedDate: new Date(), notes: "Added by Harshal" }
      ];
      


  try {
    await Job.insertMany(jobs);
    console.log('✅ 20 jobs inserted for Harshal');
  } catch (err) {
    console.error('❌ Error inserting jobs:', err);
  } finally {
    mongoose.connection.close();
  }
};
