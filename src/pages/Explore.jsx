export default function Explore(){
    return (
        <>
            <main>
                <section className="flex justify-center">
                    <img src="/explore/hero-image.svg" alt="A collage of different locations in old Toronto" className="w-full"/>
                </section>

                <section className="bg-amber">
                    <div className="flex flex-col gap-y-[1rem] p-[3rem]">
                        <div className="heading font-dela font-normal text-[4rem] text-left">
                            <div>Making new memories one place</div>
                            <div>at a time</div>
                        </div>

                        <div className="font-chivo font-normal text-[1.5rem]">
                            We aim to highlight the amazing features of hidden local businesses, help new immigrant students connect with caring communities in Toronto, and provide pointers that make dreaded journeys on public transport a lot more bearable. 
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src="/explore/cityscape.svg" alt="A cityscape" className="w-full"/>
                    </div>
                </section>


                <section className="p-[3rem] bg-amber">
                    <div className="flex font-dela font-normal text-[4rem] justify-center gap-[1rem]">
                        <img src="/explore/pink-star.svg" alt="A pink star" />
                        <div>Start exploring</div>
                        <img src="/explore/pink-star.svg" alt="A pink star" />
                    </div>

                    <div className="grid gap-4">
                        {/* First Row */}
                        <div className="flex justify-between">
                            <div className="flex flex-col items-center hover-eats">
                                <img src="/explore/food_bw.svg" alt="food image" />
                                <div className="font-chivo font-normal text-[1.5rem]">Eats</div>
                            </div>
                            <div className="flex flex-col items-center hover-shops">
                                <img src="/explore/shop_bw.svg" alt="shop image" />
                                <div className="font-chivo font-normal text-[1.5rem]">Shops</div>
                            </div>
                            <div className="flex flex-col items-center hover-grocery">
                                <img src="/explore/grocery_bw.svg" alt="grocery image" />
                                <div className="font-chivo font-normal text-[1.5rem]">Grocery</div>
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="flex justify-center gap-[3rem]">
                            <div className="flex flex-col items-center hover-places">
                                <img src="/explore/places_bw.svg" alt="place image" />
                                <div className="font-chivo font-normal text-[1.5rem]">Places</div>
                            </div>
                            <div className="flex flex-col items-center hover-events">
                                <img src="/explore/events_bw.svg" alt="event image" />
                                <div className="font-chivo font-normal text-[1.5rem]">Events</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}