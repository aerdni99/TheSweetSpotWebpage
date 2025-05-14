/*
    VideoList.js

    Component for listing videos on the Band Webpage
*/

'use client';

import EmbeddedVideo from '../Video/EmbeddedVideo';

const TITLE = "Check Out The I'm Out Music Video!";
const URL = "https://www.youtube.com/embed/Du7XheaMfZM?si=WOFML6_ptJlWRonn";


export default function RecentVideo() {

    return (
        <div className='mb-10'>
        <h1 className='neonText text-4xl text-center p-10'>{ TITLE }</h1>
            <EmbeddedVideo
                            url={ URL }
                            title={ TITLE }
                        />
        </div>
    )
}
