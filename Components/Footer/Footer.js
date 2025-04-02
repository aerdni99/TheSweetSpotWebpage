/*
    Footer.js

    Footer component for the webpage layout
*/

import SocialDirectory from "../SocialMedia/SocialDirectory";

export default function Footer() {
    return (
        <div>
            <div className="mt-15 mb-15">
                <div className="">
                    <SocialDirectory size={40} />
                </div>
                <div className="flex justify-center mt-5">
                    <a className="neonText" href="/privacy-policy">Privacy Policy</a>
                </div>
            </div>
            
        </div>
    );
}
