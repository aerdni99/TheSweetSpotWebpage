/*
    Album.js

    Component for photo album on the website
*/

'use client';

import Image from 'next/image';
import './PhotoAlbum.css';

export default function PhotoAlbum() {
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
                className='photo'
            />
            <Image
                src={img_paths[1]}
                alt='Band Pictures'
                width={375}
                height={250}
                className='photo'
            />
            <Image
                src={img_paths[2]}
                alt='Band Pictures'
                width={375}
                height={250}
                className='photo'
            />
            <Image
                src={img_paths[3]}
                alt='Band Pictures'
                width={375}
                height={250}
                className='photo'
            />
            <Image
                src={img_paths[4]}
                alt='Band Pictures'
                width={375}
                height={250}
                className='photo'
            />
        </div>
    );
}
