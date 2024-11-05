// Header for my page

'use client';

export default function Header({ title }) {
    return <h1>{title ? title : 'No Title Specified'}</h1>;
}
