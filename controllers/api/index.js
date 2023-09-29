const express = require('express');
const router = express.Router();

const applicationRoutes = require('./ApplicationRoutes');
const contractorRoutes = require('./ContractorRoutes');
const jobListingRoutes = require('./JobListingRoute');
const messagesRoutes = require('./MessagesRoutes');
const subContractorRoutes = require('./SubContractorRoute');
const userRoutes = require('./UserRoute');

router.use('/applications', applicationRoutes);
router.use('/contractors', contractorRoutes);
router.use('/job-listings', jobListingRoutes);
router.use('/messages', messagesRoutes);
router.use('/subcontractors', subContractorRoutes);
router.use('/users', userRoutes);

module.exports = router;
