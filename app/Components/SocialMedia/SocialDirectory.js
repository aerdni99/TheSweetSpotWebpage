/*
    SocialDirectory.js

    Component for organizing social media buttons
*/

'use client';

import SocialButton from './SocialButton.js'
import './social.css'

export default function SocialDirectory() {
    return (
        <div className="navBar">
            <SocialButton path='/socials/facebook.png' link='https://www.facebook.com/indreband/' alt='Facebook'/>
            <SocialButton path='/socials/instagram.png' link='https://www.instagram.com/indremusic/' alt='Instagram'/>
            <SocialButton path='/socials/apple-music.png' link='https://twitter.com/indremusic'  alt='Apple Music'/>
            <SocialButton path='/socials/spotify.png' link='https://open.spotify.com/artist/5nsDXAXWEzw7NtRQjnFLir?si=WSGd7FSyS1quGvVZzDKxjw&nd=1&dlsi=e93ecc60527c477a' alt='Spotify'/>
            <SocialButton path='/socials/youtube.png' link='https://music.apple.com/gb/artist/indr%C3%A9/1439515994' alt='Youtube'/>
        </div>
    );
}