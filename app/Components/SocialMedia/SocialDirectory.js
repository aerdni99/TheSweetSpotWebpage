/*
    SocialDirectory.js

    Component for organizing social media buttons
*/

'use client';

import SocialButton from './SocialButton.js'
import './Socials.css'

export default function SocialDirectory() {
    return (
        <div className="navBar">
            <SocialButton path='/socials/facebook.png' link='https://www.facebook.com/indreband/' alt='Facebook'/>
            <SocialButton path='/socials/instagram.png' link='https://www.instagram.com/thesweetspot_band/' alt='Instagram'/>
            {/* <SocialButton path='/socials/apple-music.png' link='https://music.apple.com/gb/artist/indr%C3%A9/1439515994'  alt='Apple Music'/> */}
            <SocialButton path='/socials/spotify.png' link='https://open.spotify.com/artist/1zGfVEcjrkEJUvCqbzKgV2' alt='Spotify'/>
            <SocialButton path='/socials/youtube.png' link='https://www.youtube.com/@thesweetspotband' alt='Youtube'/>
        </div>
    );
}
