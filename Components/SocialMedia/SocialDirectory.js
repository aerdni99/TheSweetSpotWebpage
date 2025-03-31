/*
    SocialDirectory.js

    Component for organizing social media buttons
*/

'use client';

import SocialButton from './SocialButton.js'

/*
    Options for this function:
        align:
            Expects 1 of 3 strings to be used for a tailwind utility class 
            "justify-center"
            "justify-start"
            "justify-end"
            if no option or an invalid option is chosen, "justify-center" is chosen by default.
        size:
            passed down to each social button, this determines the size of the buttons
*/

export default function SocialDirectory({ align, size }) {
    console.log(align);
    if ((align != "justify-center") && (align != "justify-start") && (align != "justify-end")) {
        console.log("Invalid parameter in <SocialDirectory /> \"align\"");
        align = "justify-center";
    }
    if (!size || size < 1) {
        console.log("Invalid parameter in <SocialDirectory /> \"size\"");
        size = 100;
    }
    return (
        <div className={`flex ${align} max-sm:justify-center`}>
            <SocialButton path='/socials/facebook.svg' link='https://www.facebook.com/indreband/' alt='Facebook' size={size} />
            <SocialButton path='/socials/instagram.svg' link='https://www.instagram.com/thesweetspot_band/' alt='Instagram' size={size} />
            <SocialButton path='/socials/spotify.svg' link='https://open.spotify.com/artist/1zGfVEcjrkEJUvCqbzKgV2' alt='Spotify' size={size} />
            <SocialButton path='/socials/youtube.svg' link='https://www.youtube.com/@thesweetspotband' alt='Youtube' size={size} />
        </div>
    );
}
