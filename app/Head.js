// Header for my page

'use client';

export default function Head({ title }) {
    return <h1>{title ? title : 'No Title Specified'}</h1>;
}
