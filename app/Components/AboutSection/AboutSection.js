/*
    AboutSection.js

    Component for the band page's about section
*/

export default function AboutSection({ bio }) {
    return (
        <div>
            <h1 className="shadow-neon wrapper color-red-950">About Us</h1>
            <p className="neonText wrapper shadow-2xl">{bio}</p>
        </div>
    );
}
