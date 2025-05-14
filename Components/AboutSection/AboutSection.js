/*
    AboutSection.js

    Component for the band page's about section
*/

const TITLE = "About Us";

export default function AboutSection({ bio }) {
    return (
        <div>
            <h1 className='neonText text-4xl text-center p-4'>{ TITLE }</h1>
            <div className="mx-[20vw] max-sm:mx-10 border-r-2 border-l-2 border-pink-200 bg-[#1a1a1a] p-6">
                <div className="mx-5">
                    <p className="neonText mb-4">
                
                        The Sweet Spot is a bold new beginning and comeback for Akron, Ohio sublings Maddie and Angelo Indré.
                        After their band fell apart last year, Maddie spent the summer touring as a merch girl unsure of her next move regarding her own band.
                        Days spent on the tour bus sparked inspiration, and a brand new vision was born. Songs started pouring out, and in between tours, she would take them to Angelo, and they would spend hours recording demo after demo.

                    </p>
                    <p className="neonText mb-4">

                        When things fall apart, it can be looked at as a stopping point or a chance to create.
                        A chance to start again and make it exactly how you want it.
                        This is a new era.

                    </p>
                    <p className="neonText">

                        Welcome to The Sweet Spot.

                    </p>
                </div>
            </div>
        </div>
    );
}
