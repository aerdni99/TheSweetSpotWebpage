/*
    VideoList.js

    Component for listing videos on the Band Webpage
*/

'use client';

import EmbeddedVideo from '../Video/EmbeddedVideo';

const TITLE = "My Riot Music Video";
const URL = "https://www.youtube.com/embed/YrqWBN_P1sE?si=tPLs9QCvzXxyDxTa";


export default function RecentVideo() {

    return (
        <div>
            <h1 className='neonText'>{ TITLE }</h1>
            <EmbeddedVideo
                            url={ URL }
                            title={ TITLE }
                        />
        </div>
    )
}
