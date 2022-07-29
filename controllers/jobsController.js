const createJob = async (req, res) => {
    res.send("create a job");
};
const getAllJobs = async (req, res) => {
    res.send("get all jobs");
};
const updateJob = async (req, res) => {
    res.send("update a job");
};
const deleteJob = async (req, res) => {
    res.send("delete a job");
};
const showStats = async (req, res) => {
    res.send("stats");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
