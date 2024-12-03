/*
    page.js

    Main page for the website
*/

import './globals.css';
import PhotoAlbum from './Components/PhotoAlbum/PhotoAlbum.js'
import VideoList from './Components/VideoList/VideoList.js'
import ShowList from './Components/UpcomingShows/ShowList.js'
import BookingInquiry from './Components/BookingInquiry/BookingInquiry.js';


export default function HomePage() {

    return (
    <div>
        <PhotoAlbum />
        <ShowList />
        <BookingInquiry />
        <VideoList/>
    </div>
    );
}
