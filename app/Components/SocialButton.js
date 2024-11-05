/*
    SocialDirectory.js

    Component for creating social media buttons
*/

'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SocialButton({path, link, alt}) {
    console.log({path});
    return (
        <div>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <Image
              src={path}
              alt={alt}
              width={64}
              height={64}
            />
          </Link>
        </div>
    );
}