/*
    ShowList.js

    Component to list upcoming shows for the band

    Gonna use the BandsInTown Events Widget for this
    Documentation:
        https://www.artists.bandsintown.com/support/blog/install-events-widget
        https://help.artists.bandsintown.com/en/articles/9186477-api-documentation
*/

"use client"

import dynamic from 'next/dynamic';

const BandsInTownWidget = dynamic(() => import('./eventWidget.js'), { ssr: false });

export default function ShowList() {
    return (
        <div>
            <BandsInTownWidget />
        </div>
    );
}