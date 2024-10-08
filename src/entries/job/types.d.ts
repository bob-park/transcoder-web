type JobType = 'COPY' | 'TRANSCODE';
type JobStatus = 'WAITING' | 'PROCEEDING' | 'SUCCESS' | 'FAILURE';

interface Job {
  id: number;
  jobType: JobType;
  status: JobStatus;
  source: string;
  dest: string;
  startDatetime?: Date;
  endDatetime?: Date;
  createdDate: Date;
  lastModifiedDate?: Date;
}
