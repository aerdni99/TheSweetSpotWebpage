/*
    Footer.js

    Footer component for the webpage layout
*/

import SocialDirectory from "../SocialMedia/SocialDirectory";

export default function Footer() {
    return (
        <div className="mt-15 mb-15">
            <div className="border-b-2 border-t-2 border-pink-200">
                <SocialDirectory />                
            </div>
        </div>
    );
}
