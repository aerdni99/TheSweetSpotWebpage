/*
    AboutSection.js

    Component for the band page's about section
*/

import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'public', 'bio.txt');
    console.log('File Path:', filePath); // Log to check the full path

    try {
        const bio = fs.readFileSync(filePath, 'utf-8');
        console.log('Bio:', bio); // Log the content of the bio file
        return {
            props: {
                bio,
            },
        };
    } catch (error) {
        console.error('Error reading bio.txt:', error);
        return {
            props: { bio: 'Error loading bio.' },
        };
    }
}

export default function AboutSection({ bio }) {
    return (
        <div>
            <h1 className="neonText wrapper">About Us</h1>
            <p className="neonText wrapper">{bio}</p>
        </div>
    );
}
