/*
    SocialDirectory.js

    Component for organizing social media buttons
*/

'use client';

import SocialButton from './SocialButton.js'

/*
    Options for this function:
        align:
            Expects true or false
            if true, justify-end
            if false or null, justify center
        size:
            passed down to each social button, this determines the size of the buttons
*/

export default function SocialDirectory({ alignRight, size }) {

    let align = "";

    if (!size || size < 1) {
        console.log("Invalid parameter in <SocialDirectory /> \"size\"\nUsing default value: 100");
        size = 100;
    }
    if (alignRight) {
        align = "justify-end mx-15";
    } else {
        align = "justify-center";
    }

    return (
        <div className="border-b-2 border-t-2 border-pink-200">
            <div className={`flex ${align} max-sm:justify-center max-sm:pr-0`}>
                <SocialButton path='/socials/facebook.svg' link='https://www.facebook.com/indreband/' alt='Facebook' size={size} />
                <SocialButton path='/socials/instagram.svg' link='https://www.instagram.com/thesweetspot_band/' alt='Instagram' size={size} />
                <SocialButton path='/socials/spotify.svg' link='https://open.spotify.com/artist/1zGfVEcjrkEJUvCqbzKgV2' alt='Spotify' size={size} />
                <SocialButton path='/socials/youtube.svg' link='https://www.youtube.com/@thesweetspotband' alt='Youtube' size={size} />
            </div>
        </div>
    );
}
