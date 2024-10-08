'use client';

export default function CurrentJob() {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">실행중인 작업</h2>
        <div className="mt-10 flex flex-col gap-5">
          {/* 작업 종류 */}
          <div className="flex flex-row gap-2">
            <div className="w-24 flex-none text-right">작업 종류 :</div>
            <div className="flex-1 text-left"></div>
          </div>

          {/* 원본 경로 */}
          <div className="flex flex-row gap-2">
            <div className="w-24 flex-none text-right">원본 경로 :</div>
            <div className="flex-1 text-left"></div>
          </div>

          {/* 대상 경로 */}
          <div className="flex flex-row gap-2">
            <div className="w-24 flex-none text-right">대상 경로 :</div>
            <div className="flex-1 text-left"></div>
          </div>

          {/* progress bar */}
          <div className="flex flex-row items-center justify-center gap-3 px-6">
            <progress className="progress flex-1" value="10" max="100" />
            <span className="w-16 flex-none">10 %</span>
          </div>
        </div>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
}
