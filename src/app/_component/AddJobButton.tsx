'use client';

import { useState } from 'react';
import { IoAddCircle } from 'react-icons/io5';

import AddJobModal from './AddJobModal';

export function AddJobButton() {
  // state
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="tooltip tooltip-bottom" data-tip="작업 추가">
        <button
          className="btn btn-square btn-ghost"
          type="button"
          onClick={() => setOpen(true)}
        >
          <IoAddCircle className="h-8 w-8" />
        </button>
      </div>
      <AddJobModal open={open} onBackdrop={() => setOpen(false)} />
    </>
  );
}
