'use client';

import { useEffect, useState } from 'react';

import { useSearchJob } from '@/hooks/job';

import dayjs from 'dayjs';

function parseType(type: JobType) {
  switch (type) {
    case 'COPY':
      return '복사';

    case 'TRANSCODE':
      return '트랜스코딩';

    default:
      return type;
  }
}

export default function WaitingJobList() {
  // state
  const [jobs, setJobs] = useState<Job[]>([]);

  // query
  const { pages } = useSearchJob(['WAITING']);

  // useEffect
  useEffect(() => {
    const newJobList = new Array<Job>();
    const items = pages.map((page) => page.content);

    items.forEach((item) => newJobList.push(...item));

    setJobs(newJobList);
  }, [pages.length !== 0 && pages[0].total]);

  return (
    <div className="card size-full bg-base-100 shadow-xl">
      <div className="card-body size-full">
        <h2 className="card-title">대기 중인 작업</h2>

        {/*  list  */}
        <div className="mt-8 h-[300px] overflow-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>아이디</th>
                <th>작업 종류</th>
                <th>원본 경로</th>
                <th>대상 경로</th>
                <th>생성일</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={`job-item-${job.id}`} className="">
                  <td>{job.id}</td>
                  <td>{parseType(job.jobType)}</td>
                  <td>{job.source}</td>
                  <td>{job.dest}</td>
                  <td>
                    {dayjs(job.createdDate).format('YYYY-MM-DD HH:mm:ss')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
