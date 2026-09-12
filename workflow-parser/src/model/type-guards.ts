import {ActionStep, Job, ParallelStep, ReusableWorkflowJob, RunStep, Step, WorkflowJob} from "./workflow-template.js";

export function isRunStep(step: Step): step is RunStep {
  return (step as RunStep).run !== undefined;
}

export function isActionStep(step: Step): step is ActionStep {
  return (step as ActionStep).uses !== undefined;
}

export function isParallelStep(step: Step): step is ParallelStep {
  return (step as ParallelStep).parallel !== undefined;
}

export function isJob(job: WorkflowJob): job is Job {
  return job.type === "job";
}

export function isReusableWorkflowJob(job: WorkflowJob): job is ReusableWorkflowJob {
  return job.type === "reusableWorkflowJob";
}
