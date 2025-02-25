/*
    VideoList.js

    Component for listing videos on the Band Webpage
*/

'use client';

import EmbeddedVideo from '../Video/EmbeddedVideo';

export default function VideoList() {

    const titles = [
        "My Riot",
        "Passenger Side",
        "Shadow Shadow",
        "Golden Hour",
        "The Stream"
    ]

    const urls = [
        "https://www.youtube.com/embed/YrqWBN_P1sE?si=tPLs9QCvzXxyDxTa",
        "https://www.youtube.com/embed/fKzQjOUeHYg?si=VT1uGvgaYvNcvTlU",
        "https://www.youtube.com/embed/mqK1JQPW0rQ?si=BBLZmM9X0a06Qd5d",
        "https://www.youtube.com/embed/q6leNxx11dg?si=wfogOBSjNZFzdnQo",
        "https://www.youtube.com/embed/fncP94o10jw?si=_BZrP7Y8Y2UzNtC5"
    ]

    return (
        <div>
            <h1 className='neonText'>VIDEOS</h1>

            <h1 className='neonText'>{titles[0]}</h1>
            <EmbeddedVideo
                url={urls[0]}
                title={titles[0]}
            />

            <h1 className='neonText'>{titles[1]}</h1>
            <EmbeddedVideo
                url={urls[1]}
                title={titles[1]}
            />

            <h1 className='neonText'>{titles[2]}</h1>
            <EmbeddedVideo
                url={urls[2]}
                title={titles[2]}
            />

            <h1 className='neonText'>{titles[3]}</h1>
            <EmbeddedVideo
                url={urls[3]}
                title={titles[3]}
            />

            <h1 className='neonText'>{titles[4]}</h1>
            <EmbeddedVideo
                url={urls[4]}
                title={titles[4]}
            />
        </div>
    )
}
