/*
    SocialDirectory.js

    Component for creating social media buttons
*/

'use client';

import Link from 'next/link';

export default function SocialButton({ path, link, alt, size }) {
  return (
        <div>
          <Link href={link} target="_blank" rel="noopener noreferrer" >
            <img
              className={`max-sm:w-[50px] max-sm:h-[50px] select-none aspect-square transition-transform duration-300 ease-in-out hover:scale-110`}
              src={path}
              alt={alt}
              width={size}
              height={size}
            />
          </Link>
        </div>
    );
}