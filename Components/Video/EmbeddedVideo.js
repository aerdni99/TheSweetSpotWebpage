/*
    EmbeddedVideo.js
    
    Component for an embedded video on the webpage
*/

'use client';

export default function EmbeddedVideo({url, title}) {
    return (
      <div className="w-[90%] md:w-1/2 mx-auto">
        <iframe
          className="w-full aspect-video"
          src={url} 
          title={title} 
          frameBorder="0" // This attribute is deprecated, but without it, an ugly white border surrounds my videos
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
    );
  }
