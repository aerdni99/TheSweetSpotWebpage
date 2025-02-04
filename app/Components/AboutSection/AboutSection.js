/*
    AboutSection.js

    Component for the band page's about section
*/

export default function AboutSection({ bio }) {
    return (
        <div>
            <h1 className="neonText wrapper">About Us</h1>
            <p className="neonText wrapper">{bio}</p>
        </div>
    );
}
