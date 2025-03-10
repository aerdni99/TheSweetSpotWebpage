/*
    Header.js

    Header component for the webpage layout
*/

import Image from 'next/image';
import SocialDirectry from '../SocialMedia/SocialDirectory.js';

export default function Header() {
    return (
        <div>
            <div className='flex justify-center'>
                <Image
                src='/logo.png'
                alt='Logo'
                width={150}
                height={150}
                />
            </div>
            <SocialDirectry />
        </div>
    );
}
