'use client';

import { IoChevronBackSharp } from 'react-icons/io5';

import { useRouter } from 'next/navigation';

export default function BackDrop() {
  const router = useRouter();

  const handleBackDrop = () => {
    router.back();
  };

  return (
    <div className="tooltip" data-tip="뒤로">
      <button
        className="btn"
        type="button"
        color="ghost"
        onClick={handleBackDrop}
      >
        <IoChevronBackSharp className="h-5 w-5" />
      </button>
    </div>
  );
}
