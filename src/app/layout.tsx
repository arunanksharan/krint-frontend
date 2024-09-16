import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import QueryProvider from '@/components/providers/query-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'A better way to prepare for interviews',
  description:
    'You AI companion has you covered. Practice. Prepare. Evaluate. Excel.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="w-full flex flex-row items-center justify-center"> */}

        {/* <div className="flex flex-row items-center justify-center gap-16 my-4">
            <div className="cursor-pointer ">Home</div>
            <div className="cursor-pointer ">About</div>
            <div className="cursor-pointer ">Features</div>
            <div className="cursor-pointer ">Contact Us</div>
            <div className="bg-slate-900 text-white rounded-lg cursor-pointer">
              <button className="px-4 py-1">Sign In</button>
            </div>
          </div> */}
        {/* </div> */}

        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
