import CurrentJob from '@/app/_component/CurrentJob';
import WaitingJobList from '@/app/_component/WaitingJobList';

export default function Home() {
  return (
    <div className="m-2 flex size-full flex-col items-center justify-center p-3">
      {/* current job */}
      <div className="w-full flex-1 lg:w-[720px] lg:flex-none">
        <CurrentJob />
      </div>

      {/* waiting job list */}
      <div className="mt-5 w-full flex-1">
        <WaitingJobList />
      </div>
    </div>
  );
}
