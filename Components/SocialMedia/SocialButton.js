/*
    SocialDirectory.js

    Component for creating social media buttons
*/

'use client';

import Link from 'next/link';

export default function SocialButton({path, link, alt}) {
    return (
        <div>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <img
              className='w-80px aspect-square transition-transform duration-300 ease-in-out hover:scale-110'
              src={path}
              alt={alt}
            />
          </Link>
        </div>
    );
}