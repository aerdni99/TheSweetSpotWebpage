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
import Footer from "../Components/Footer/Footer.js"
// import MailingList from '../Components/Mailing List/MailingList.js';
// import AboutSection from '../Components/AboutSection/AboutSection.js';

export default function HomePage() {
    
    return (
    <div>
        <Splash />
        <RecentVideo />
        {/* <Header /> */}
        {/* <AboutSection /> */}
        <ShowList />
        <BookingInquiry />
        {/* <MailingList /> */}
        <PhotoAlbum />
        <Footer />
    </div>
    );
}
