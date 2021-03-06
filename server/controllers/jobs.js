import Job from '../models/job.js'

export const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        console.log(jobs);
        res.status(200).json(jobs);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const createJob = async (req, res) => {
    const job = req.body;
    const newJob = new Job(job)
    try {
        await newJob.save();
        res.status(201).json(newJob);
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}