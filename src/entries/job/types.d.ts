type JobType = 'COPY' | 'TRANSCODE';
type JobStatus = 'WAITING' | 'PROCEEDING' | 'SUCCESS' | 'FAILURE';

interface JobOptions {
  isOverride: boolean;
  videoCodec: string;
  videoBitrate: string;
  videoScale: string;
  preset: string;
}

interface CreateJobRequest {
  type: JobType;
  source: string;
  dest: string;
  options?: JobOptions;
}

interface Job {
  id: number;
  jobType: JobType;
  status: JobStatus;
  source: string;
  dest: string;
  progress: number;
  startDatetime?: Date;
  endDatetime?: Date;
  createdDate: Date;
  lastModifiedDate?: Date;
}
