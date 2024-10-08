import CurrentJob from '@/app/_component/CurrentJob';

export default function Home() {
  return (
    <div className="m-2 flex size-full items-center justify-center p-3">
      {/* current job */}
      <div className="w-[650px] flex-1 lg:flex-none">
        <CurrentJob />
      </div>
    </div>
  );
}
