/*
    ShowList.js

    Component to list upcoming shows for the band

    Gonna use the BandsInTown Events Widget for this
    Documentation:
        https://www.artists.bandsintown.com/support/blog/install-events-widget
        https://help.artists.bandsintown.com/en/articles/9186477-api-documentation
*/

"use client"

export default function ShowList() {
    return (
        <div>
            <script 
                charset="utf-8"   
                src="https://widget.bandsintown.com/main.min.js">
            </script>
            <a 
                class="bit-widget-initializer" 
                data-artist-name="Thundercat" 
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
                data-display-start-time="true">
            </a>
        </div>
    );
}