import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RegisterLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full py-4 px-8 bg-white shadow-md flex items-center">
        <Link href="/">
          <Image
            src="/brand/logo_brand_deep_purple.png" // Replace with your logo path
            alt="Logo"
            width={120} // Adjust width as needed
            height={40} // Adjust height as needed
          />
        </Link>
      </header>
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default RegisterLayout;
