/*
    VideoList.js

    Component for listing videos on the Band Webpage
*/

'use client';

import EmbeddedVideo from '../Video/EmbeddedVideo';

const TITLE = "Check Out The Missed Calls Music Video!";
const URL = "https://www.youtube.com/embed/lOvv6fmF_dY?si=aj1_EwEqNev5FPSc";


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
