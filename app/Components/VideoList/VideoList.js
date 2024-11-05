/*
    VideoList.js

    Component for listing videos on the Band Webpage
*/

'use client';

import EmbeddedVideo from './EmbeddedVideo';
import './VideoList.css'

export default function VideoList() {
    return (
        <div>
            <h1 className='neonGreenText'>VIDEOS</h1>
            <div className='wrapper'>
                <EmbeddedVideo
                    url={"https://www.youtube.com/embed/fKzQjOUeHYg?si=VT1uGvgaYvNcvTlU"}
                    title={"Passenger Side"}
                />
            </div>
        </div>
    )
}
