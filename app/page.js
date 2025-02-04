/*
    page.js

    Main page for the website
    @TODO add mailing list, would require a database to save the mail-to list, as well as a page for the band owner to draft and send emails to the mailing list
*/

import './globals.css';
import PhotoAlbum from './Components/PhotoAlbum/PhotoAlbum.js'
import VideoList from './Components/VideoList/VideoList.js'
import ShowList from './Components/UpcomingShows/ShowList.js'
import BookingInquiry from './Components/BookingInquiry/BookingInquiry.js';
import AboutSection from './Components/AboutSection/AboutSection.js';


export default function HomePage() {

    return (
    <div>
        <PhotoAlbum />
        <AboutSection />
        <ShowList />
        <BookingInquiry />
        <VideoList/>
    </div>
    );
}
