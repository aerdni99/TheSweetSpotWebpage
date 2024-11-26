/*
    page.js

    Main page for the website
*/

import './globals.css';
import PhotoAlbum from './Components/PhotoAlbum/PhotoAlbum.js'
import VideoList from './Components/VideoList/VideoList.js'
import ShowList from './Components/UpcomingShows/ShowList.js'


export default function HomePage() {

    return (
    <div>
        <PhotoAlbum />
        <p>Widget Below</p>
        <ShowList />
        <p>Widget Above</p>
        <VideoList/>
    </div>
    );
}
