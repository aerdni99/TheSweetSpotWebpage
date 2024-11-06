/*
    SocialDirectory.js

    Component for creating social media buttons
*/

'use client';

import Image from 'next/image';
import Link from 'next/link';
import './Socials.css';

export default function SocialButton({path, link, alt}) {
    return (
        <div>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <Image
              className='neonImage'
              src={path}
              alt={alt}
              width={64}
              height={64}
            />
          </Link>
        </div>
    );
}