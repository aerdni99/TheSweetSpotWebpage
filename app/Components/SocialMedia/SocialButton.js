/*
    SocialDirectory.js

    Component for creating social media buttons
*/

'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SocialButton({path, link, alt}) {
    return (
        <div>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <Image
              className='w-[clamp(80px,3vw,100px)] aspect-square transition-transform duration-300 ease-in-out hover:scale-110'
              src={path}
              alt={alt}
              width={100}
              height={100}
            />
          </Link>
        </div>
    );
}