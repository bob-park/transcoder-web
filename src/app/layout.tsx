import Navbar from '@/app/_component/Navbar';
import RQProvider from '@/app/_component/RQProvider';
import ToastProvider from '@/components/toast/ToastProvider';
import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: "Bob's Transcoder",
  description: '이것은 Bob 이 만든 간단한 트랜스코딩 웹페이지이다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <ToastProvider limit={5} timeout={5}>
          <RQProvider>
            <div className="size-full min-w-[650px] p-5">
              {/* nav bar */}
              <div className="w-full">
                <Navbar />
              </div>
              <div className="size-full">{children}</div>
            </div>
          </RQProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
