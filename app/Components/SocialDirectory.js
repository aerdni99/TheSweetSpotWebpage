// Component for organizing social media buttons

'use client';

import SocialButton from './SocialButton.js'

export default function SocialDirectory() {
    return (
        <div>
            <SocialButton path='../public/socials/facebook.png' link='https://www.facebook.com/indreband/'/>
            <SocialButton path='../public/socials/instagram.png' link='https://www.instagram.com/indremusic/'/>
            <SocialButton path='../public/socials/itunes.png' link='https://twitter.com/indremusic'/>
            <SocialButton path='../public/socials/spotify.png' link='https://open.spotify.com/artist/5nsDXAXWEzw7NtRQjnFLir?si=WSGd7FSyS1quGvVZzDKxjw&nd=1&dlsi=e93ecc60527c477a'/>
            <SocialButton path='../public/socials/twitter.png' link='https://music.apple.com/gb/artist/indr%C3%A9/1439515994'/>
        </div>
    );
}