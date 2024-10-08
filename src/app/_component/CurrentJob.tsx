'use client';

import { useCurrentJob } from '@/hooks/job';

export default function CurrentJob() {
  // query
  const { currentJob, isLoading } = useCurrentJob();

  return (
    <div className="card min-h-[300px] w-full bg-base-100 shadow-xl">
      <div className="card-body size-full">
        <h2 className="card-title">실행중인 작업</h2>

        {/* No Job */}
        {!currentJob && !isLoading && (
          <div className="my-auto flex flex-row items-center justify-center">
            <div className="text-4xl font-bold text-gray-500">No Job</div>
          </div>
        )}

        {/* Loading */}
        {!currentJob && isLoading && (
          <div className="my-auto flex flex-row items-center justify-center">
            <span className="loading loading-infinity loading-lg"></span>
          </div>
        )}

        {/* job info */}
        {!!currentJob && !isLoading && (
          <div className="mt-10 flex flex-col gap-5">
            {/* 작업 종류 */}
            <div className="flex flex-row gap-2">
              <div className="w-24 flex-none text-right">작업 종류 :</div>
              <div className="flex-1 text-left">{currentJob.jobType}</div>
            </div>

            {/* 원본 경로 */}
            <div className="flex flex-row gap-2">
              <div className="w-24 flex-none text-right">원본 경로 :</div>
              <div className="flex-1 text-left">{currentJob.source}</div>
            </div>

            {/* 대상 경로 */}
            <div className="flex flex-row gap-2">
              <div className="w-24 flex-none text-right">대상 경로 :</div>
              <div className="flex-1 text-left">{currentJob.dest}</div>
            </div>

            {/* progress bar */}
            <div className="flex flex-row items-center justify-center gap-3 px-6">
              <progress
                className="progress flex-1"
                value={currentJob.progress}
                max="100"
              />
              <span className="w-16 flex-none">{currentJob.progress} %</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
