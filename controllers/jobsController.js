import Job from "../model/Job.js";
import { StatusCodes } from "http-status-codes";
import {
    BadRequestError,
    NotFoundError,
    UnAuthenticatedError,
} from "../errors/index.js";

const createJob = async (req, res) => {
    const { position, company } = req.body;
    if (!position || !company) {
        throw new BadRequestError("please provide all values");
    }
    req.body.createdBy = req.user.userId;
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json({ job });
};
const getAllJobs = async (req, res) => {
    const jobs = await Job.find({ createdBy: req.user.userId });

    res.status(StatusCodes.OK).json({
        jobs,
        totalJobs: jobs.length,
        numOfPages: 1,
    });
};
const updateJob = async (req, res) => {
    const { id: jobId } = req.params;
    const { company, position } = req.body;
    if (!company || !position) {
        throw new BadRequestError("please provide all values");
    }
    const job = await Job.findOne({ _id: jobId });
    if (!job) {
        throw new NotFoundError(`no such job ${jobId}`);
    }

    //check permission
    console.log(typeof req.user.userId);
    console.log(typeof job.createdBy);

    checkPermissions(req.user, job.createdBy);

    const updatedJob = await Job.findOneAndUpdate(
        {
            _id: jobId,
        },
        req.body,
        {
            new: true,
            runValidators: true,
        }
    );
    res.status(StatusCodes.OK).json({ updatedJob });
};
const deleteJob = async (req, res) => {
    res.send("delete a job");
};
const showStats = async (req, res) => {
    res.send("stats");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
