/*
    eventWidget.js

    Component for the Bands In Town events widget.
    This requires its own file because the widget is generated dynamically and needs to be rendered only on the client side

    BandsInTown artist page: https://www.bandsintown.com/a/15567012?came_from=undefined&utm_medium=web&utm_source=artist_explorer_page&utm_campaign=artist
*/

import { useEffect } from 'react';

export default function eventWidget() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://widget.bandsintown.com/main.min.js";
        script.async = true;
        script.charSet = "utf-8";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [])

    return (
        <div id='bandsintown-events'>
            <a 
                className="bit-widget-initializer" 
                data-artist-name="id_15567012" 
                data-display-local-dates="true" 
                data-display-past-dates="false" 
                data-auto-style="false" 
                data-text-color="#FFFFFF" 
                data-link-color="#12e887" 
                data-background-color="rgba(0,0,0,0)" 
                data-display-limit="10" 
                data-link-text-color="#FFFFFF" 
                data-display-lineup="true" 
                data-display-play-my-city="true" 
                data-separator-color="rgba(124,124,124,0.25)"
                data-display-start-time="true"    
            ></a>
        </div>
    );
}
