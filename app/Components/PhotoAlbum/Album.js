/*
    Album.js

    Component for photo album on the website
*/

'use client';

import Image from 'next/image';
import './Album.css';

export default function Album() {
    const img_paths = ['/band/peek-over.jpg',
        '/band/chalk-clap.jpg',
        '/band/stage-sit.jpg',
        '/band/maddie-corral.jpg',
        '/band/over-under-2.jpg'];

    return (
        <div className='wrapper'>
            <Image
                src={img_paths[0]}
                alt='Band Pictures'
                width={375}
                height={250}
                className='neonImage'
            />
            <Image
                src={img_paths[1]}
                alt='Band Pictures'
                width={375}
                height={250}
                className='neonImage'
            />
            <Image
                src={img_paths[2]}
                alt='Band Pictures'
                width={375}
                height={250}
                className='neonImage'
            />
            <Image
                src={img_paths[3]}
                alt='Band Pictures'
                width={375}
                height={250}
                className='neonImage'
            />
            <Image
                src={img_paths[4]}
                alt='Band Pictures'
                width={375}
                height={250}
                className='neonImage'
            />
        </div>
    );
}
