/*
    page.js

    Main page for the website
    @TODO add mailing list, would require a database to save the mail-to list, as well as a page for the band owner to draft and send emails to the mailing list
*/

import './globals.css';
import PhotoAlbum from '../Components/PhotoAlbum/PhotoAlbum.js';
import RecentVideo from '../Components/RecentVideo/RecentVideo.js';
import ShowList from '../Components/UpcomingShows/ShowList.js';
// import BookingInquiry from '../Components/BookingInquiry/BookingInquiry.js';
import Splash from "../Components/Splash/Splash.js"
import Footer from "../Components/Footer/Footer.js"
// import MailingList from '../Components/Mailing List/MailingList.js';
// import AboutSection from '../Components/AboutSection/AboutSection.js';

import { supabase } from "../lib/supabase";

export async function getAlbumImages() {
  const {data, error } = await supabase
    .from("Photos")
    .select("*");

    if (error) {
      console.error("Supabase DB error:", error);
      return [];
    }

    return data;
}

export default async function HomePage() {

  // Retrieve images from database and shuffle them
  const imgs = await getAlbumImages();
  const shuffledImgs = [...imgs].sort(() => Math.random() - 0.5);
  
  return (
  <div>
      <Splash />
      <RecentVideo />
      {/* <Header /> */}
      {/* <AboutSection /> */}
      <ShowList />
      {/* <BookingInquiry /> */}
      {/* <MailingList /> */}
      <PhotoAlbum imgs={shuffledImgs || []} />
      <Footer />
  </div>
  );
}
