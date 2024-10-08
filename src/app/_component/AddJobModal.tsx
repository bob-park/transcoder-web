'use client';

import { FormEvent, useEffect, useState } from 'react';
import { IoAddCircle, IoCloseCircle } from 'react-icons/io5';

import { useAddJob } from '@/hooks/job';

const MODAL_ID = 'add_job_modal';

type AddJobModalProps = {
  open: boolean;
  onBackdrop?: () => void;
};

export default function AddJobModal({ open, onBackdrop }: AddJobModalProps) {
  // state
  const [jobType, setJobType] = useState<string>('');
  const [source, setSource] = useState<string>('');
  const [dest, setDest] = useState<string>('');
  const [options, setOptions] = useState<string>('');

  // query
  const { addJob, isLoading } = useAddJob(() => handleBackdrop());

  // useEffect
  useEffect(() => {
    const dialog = document.getElementById(MODAL_ID) as HTMLDialogElement;

    if (!dialog) {
      return;
    }

    open ? dialog.showModal() : handleBackdrop();
  }, [open]);

  // handle
  const handleBackdrop = () => {
    const dialog = document.getElementById(MODAL_ID) as HTMLDialogElement;

    if (!dialog) {
      return;
    }

    dialog.close();

    setJobType('');
    setSource('');
    setDest('');
    setOptions('');

    onBackdrop && onBackdrop();
  };

  const handleOutSideClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    handleBackdrop();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Escape') {
      handleBackdrop();
    }
  };

  const handleAddJob = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addJob({
      type: jobType as JobType,
      source,
      dest,
      options: options && JSON.parse(options),
    });
  };

  return (
    <dialog
      className="modal"
      id={MODAL_ID}
      onClick={handleOutSideClick}
      onKeyDownCapture={handleKeyDown}
    >
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-lg font-bold">작업 생성</h3>
        <div className="mt-2 flex flex-col gap-4 py-8">
          {/* 작업 종류 */}
          <div className="flex flex-row items-center gap-2">
            <div className="w-32 flex-none text-right">작업 종류 :</div>
            <div className="flex-1">
              <label className="form-control w-full max-w-xs">
                <select
                  className="select select-bordered"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                >
                  <option disabled selected value="">
                    선택
                  </option>
                  <option value="TRANSCODE">트랜스코딩</option>
                  <option value="COPY">복사</option>
                </select>
              </label>
            </div>
          </div>

          {/* 원본 경로 */}
          <div className="flex flex-row items-center gap-2">
            <div className="w-32 flex-none text-right">원본 경로 :</div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Source Path"
                className="input input-bordered w-full max-w-xs"
                value={source}
                onChange={(e) => setSource(e.target.value)}
              />
            </div>
          </div>

          {/* 대상 경로 */}
          <div className="flex flex-row items-center gap-2">
            <div className="w-32 flex-none text-right">대상 경로 :</div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Destitaion Path"
                className="input input-bordered w-full max-w-xs"
                value={dest}
                onChange={(e) => setDest(e.target.value)}
              />
            </div>
          </div>

          {/* 작업 옵션 */}
          <div className="flex flex-row items-center gap-2">
            <div className="w-32 flex-none text-right">작업 옵션 :</div>
            <div className="mr-2 flex-1">
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Job Options (json)"
                rows={8}
                value={options}
                onChange={(e) => setOptions(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="modal-action">
          <form onSubmit={handleAddJob}>
            <button className="btn" type="button" onClick={handleBackdrop}>
              <IoCloseCircle className="h-6 w-6" />
              취소
            </button>
            <button
              className="btn btn-primary ml-3"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loading loading-spinner loading-md h-6 w-6" />
              ) : (
                <IoAddCircle className="h-6 w-6" />
              )}
              생성
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
