/*
    SocialDirectory.js

    Component for organizing social media buttons
*/

'use client';

import SocialButton from './SocialButton.js'

export default function SocialDirectory() {
    return (
        <div className="flex justify-center items-center bg-[#212121]">
            <SocialButton path='/socials/facebook.svg' link='https://www.facebook.com/indreband/' alt='Facebook' />
            <SocialButton path='/socials/instagram.svg' link='https://www.instagram.com/thesweetspot_band/' alt='Instagram' />
            <SocialButton path='/socials/spotify.svg' link='https://open.spotify.com/artist/1zGfVEcjrkEJUvCqbzKgV2' alt='Spotify' />
            <SocialButton path='/socials/youtube.svg' link='https://www.youtube.com/@thesweetspotband' alt='Youtube' />
            {/* <SocialButton path='/socials/apple-music.png' link='https://music.apple.com/gb/artist/indr%C3%A9/1439515994'  alt='Apple Music'/> */}
        </div>
    );
}
