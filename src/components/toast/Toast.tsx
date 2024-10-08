'use client';

import { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { IoClose, IoWarning } from 'react-icons/io5';
import { RiErrorWarningFill, RiInformationLine } from 'react-icons/ri';

import cx from 'classnames';

type ToastProps = {
  message: ToastMessage;
  timeout: number;
  onRemove?: () => void;
};

type ToastIconProps = {
  level: MessageLevel;
};

function ToastIcon({ level }: ToastIconProps) {
  switch (level) {
    case 'warning':
      return <IoWarning className="h-6 w-6 text-orange-600" />;
    case 'success':
      return <FaCheckCircle className="h-6 w-6 text-green-500" />;
    case 'error':
      return <RiErrorWarningFill className="h-6 w-6 text-red-500" />;
    default:
      return <RiInformationLine className="h-6 w-6 text-sky-500" />;
  }
}

export default function Toast({ message, timeout, onRemove }: ToastProps) {
  // useState
  const [isShow, setIsShow] = useState<boolean>(false);

  // useEffect
  useEffect(() => {
    setTimeout(() => setIsShow(true), 0);

    setTimeout(() => {
      setIsShow(false);
    }, timeout * 1000);
  }, []);

  // handle
  const handleRemove = () => {
    onRemove && onRemove();
  };

  return (
    <div
      className={cx(
        { 'translate-y-0 opacity-100': isShow },
        { '-translate-y-3 opacity-0': !isShow },
        'alert',
        'shadow-lg',
        'flex-none',
        'w-[430px]',
        'transition-[opacity,transform]',
      )}
      role="alert"
    >
      <ToastIcon level={message.level} />
      <div>
        <h3 className="font-bold">{message.message}</h3>
      </div>
      <button
        className="btn btn-circle btn-sm"
        type="button"
        onClick={handleRemove}
      >
        <IoClose className="h-6 w-6" />
      </button>
    </div>
  );
}
