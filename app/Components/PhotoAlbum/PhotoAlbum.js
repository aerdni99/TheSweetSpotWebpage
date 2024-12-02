/*
    Album.js

    Component for photo album on the website
*/

'use client';

import Image from 'next/image';
import './PhotoAlbum.css';

export default function PhotoAlbum() {
    const img_paths = [
        '/band/chalk-clap.jpg',
        '/band/bro-sis.jpg',
        '/band/ball-above.jpg',
        '/band/cocktails.jpg',
        '/band/chalk-logo.jpg',
        '/band/bro-sis-2.jpg',
        '/band/chalk-clap-2.jpg'
    ];

    return (
        <div className='wrapper'>
            <Image
                src={img_paths[0]}
                alt='Band Pictures'
                width={250}
                height={250}
                className='photo'
            />
            <Image
                src={img_paths[1]}
                alt='Band Pictures'
                width={250}
                height={250}
                className='photo'
            />
            <Image
                src={img_paths[2]}
                alt='Band Pictures'
                width={250}
                height={250}
                className='photo'
            />
            <Image
                src={img_paths[3]}
                alt='Band Pictures'
                width={250}
                height={250}
                className='photo'
            />
            <Image
                src={img_paths[4]}
                alt='Band Pictures'
                width={250}
                height={250}
                className='photo'
            />
            <Image
                src={img_paths[5]}
                alt='Band Pictures'
                width={250}
                height={250}
                className='photo'
            />
            <Image
                src={img_paths[6]}
                alt='Band Pictures'
                width={250}
                height={250}
                className='photo'
            />
        </div>
    );
}
