import Link from 'next/link';

import { AddJobButton } from '@/app/_component/AddJobButton';

export default function Navbar() {
  return (
    <div className="navbar rounded-2xl bg-base-100 shadow-2xl">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href="/">
          Bob's Transcoder
        </Link>
      </div>
      <div className="flex-none">
        <AddJobButton />
      </div>
    </div>
  );
}
