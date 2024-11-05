/*
    EmbeddedVideo.js
    
    Component for an embedded video on the webpage
*/

'use client';

export default function EmbeddedVideo({url, title}) {
    return (
      <div>
        <iframe 
            width="560" 
            height="315" 
            src={url} 
            title={title} 
            frameBorder="0" // This attribute is deprecated, but without it, an ugly white border surrounds my videos
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
        ></iframe>
      </div>
    );
  }
