/*
    page.js

    Main page for the website
    @TODO add mailing list, would require a database to save the mail-to list, as well as a page for the band owner to draft and send emails to the mailing list
*/

import './globals.css';
import PhotoAlbum from '../Components/PhotoAlbum/PhotoAlbum.js';
import RecentVideo from '../Components/RecentVideo/RecentVideo.js';
import ShowList from '../Components/UpcomingShows/ShowList.js';
import BookingInquiry from '../Components/BookingInquiry/BookingInquiry.js';
import Splash from "../Components/Splash/Splash.js"
import Header from "../Components/Header/Header.js"
import Footer from "../Components/Footer/Footer.js"
// import AboutSection from '../Components/AboutSection/AboutSection.js';

export default function HomePage() {
    
    return (
    <div>
        <Splash />
        {/* <Header /> */}
        {/* <AboutSection /> */}
        <ShowList />
        <BookingInquiry />
        <RecentVideo />
        <PhotoAlbum />
        <Footer />
    </div>
    );
}
