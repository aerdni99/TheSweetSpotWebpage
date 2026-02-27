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
  const bucketName = "photo-album";

  const { data, error } = await supabase.storage
    .from(bucketName)
    .list("", { limit: 1000 });

  if (error) {
    console.error("Supabase storage error:", error);
    return [];
  }

  return data
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file.name))
    .map(file => {
      const { data: publicUrlData } = supabase.storage
        .from(bucketName)
        .getPublicUrl(file.name);
      return publicUrlData.publicUrl;
    });
}

export default async function HomePage() {

    const imgPaths = await getAlbumImages();
    
    return (
    <div>
        <Splash />
        <RecentVideo />
        {/* <Header /> */}
        {/* <AboutSection /> */}
        <ShowList />
        {/* <BookingInquiry /> */}
        {/* <MailingList /> */}
        <PhotoAlbum imgPaths={imgPaths} />
        <Footer />
    </div>
    );
}
