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
              className='select-none aspect-square transition-transform duration-300 ease-in-out hover:scale-110 drop-shadow-[16px_16px_40px_rgba(0,0,0,0.9)]'
              src={path}
              alt={alt}
              style={{ width: size, height: size }}
            />
          </Link>
        </div>
    );
}