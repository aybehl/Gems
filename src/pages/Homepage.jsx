export default function Homepage(){
    return (
        <>
            <main>
                <section className="flex justify-center">
                    <img src="/homepage/hero-image.svg" alt="A collage of different locations in old Toronto" className="w-full"/>
                </section>

                <section className="flex flex-col gap-y-[3rem] bg-amber p-[3rem] pb-[4rem]">
                    <div className="heading font-dela font-normal text-[4.5rem] text-center">
                        A new way to explore your home 
                    </div>
                    <div className="flex gap-[1rem]">
                        <div className="binocular-image relative w-1/2 h-96">
                            <img src="/explore/animation/green-star.svg" alt="green star" className="absolute top-[45%] left-[20%] animate-rotateWithPause w-20"/>
                            <img src="/explore/animation/square.svg" alt="Blue square" className="absolute top-0 left-[40%] animate-rotateWithPause w-28"/>
                            <img src="/explore/animation/pink-star.svg" alt="pink star" className="absolute top-[45%] left-[65%] animate-rotateWithPause w-20"/>
                            <img src="/explore/animation/binoculars.svg" alt="Binocular" className="w-[60%] h-auto absolute left-[15%] top-[60%] animate-rotateWithPause"/>
                        </div>

                        <div className="flex flex-col content font-chivo font-normal text-[1.5rem] w-[50%] gap-[1.5rem]">
                            <div>
                                Do you feel out-of-place and want to just jump back on the next flight back home? Are you struggling to find your way around this unfamiliar city? If you do, you are not alone. Thousands of immigrant students in Toronto struggle with these problems and don’t know where to find the solutions. That is where Gems comes in.
                            </div>
                            <div>
                                Gems is your guidebook to exploring Toronto in an easy and accessible way. It aims to provide you with valuable nuggets of wisdom that make finding hidden locales, navigating the public transportation system, and learning about useful grocery stories easier than ever before! 
                            </div>
                            <div>
                                <button className="bg-black text-pastel-yellow px-[2rem] py-[1rem] rounded-[1.25rem] font-chivo font-normal text-[1.5rem]">
                                    Find your gems
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col bg-fresh-green p-[3rem] gap-[4rem]">
                    <div className="heading font-dela font-normal text-[4.5rem] text-center text-pastel-yellow">
                        We aim to ...
                    </div>
                    <div className="flex gap-x-[3.375rem]">
                        <div className="flex flex-col items-center bg-bubble-gum-pink gap-y-[2.5rem] rounded-[1rem] p-[1.5rem] w-1/3 hover:ring-black hover:ring-4">
                            <img src="/homepage/gem-icon.svg" alt="A gem icon"/>
                            <div className="font-chivo font-normal text-[1.5rem] text-center w-[60%]">
                                Spotlight amazing local businesses where you can purchase food items and mementos unique to specific cultures
                            </div>
                        </div>

                        <div className="flex flex-col items-center bg-pastel-yellow gap-y-[2.5rem] rounded-[1rem] p-[1.5rem] w-1/3 hover:ring-black hover:ring-4">
                            <img src="/homepage/community-icon.svg" alt="A community icon"/>
                            <div className="font-chivo font-normal text-[1.5rem] text-center w-[60%]">
                                Introduce you to communities of fellow immigrants who clearly understand the challenges you are experiencing 
                            </div>
                        </div>

                        <div className="flex flex-col items-center bg-amber gap-y-[2.5rem] rounded-[1rem] p-[1.5rem] w-1/3 hover:ring-black hover:ring-4">
                            <img src="/homepage/homesick-icon.svg" alt="A star icon"/>
                            <div className="font-chivo font-normal text-[1.5rem] text-center w-[60%]">
                                Help you feel less homesick and afraid of being lost, both literally and figuratively
                            </div>
                        </div>

                    </div>
                </section>

                <section className="bg-amber p-[3rem]">
                    <div className="flex flex-col gap-y-[1rem]">
                        <div className="heading font-dela font-normal text-[4.5rem] text-left">
                            Be part of the community 
                        </div>

                        <div className="font-chivo font-normal text-[1.5rem]">
                            Toronto is home to a rich variety of inhabitants from all over the globe. Connect with people both from and outside your culture and create long-lasting bonds with them!
                        </div>
                        
                        <div>
                            <button className="bg-black text-pastel-yellow px-[2rem] py-[1rem] rounded-[1.25rem] font-chivo font-normal text-[1.5rem]">
                                Read More
                            </button>
                        </div>
                        
                    </div>
                    <div className="flex justify-center">
                        <img src="/homepage/group-photo.svg" alt="group image" />
                    </div>
                </section>

                <section className="flex flex-row justify-center gap-[2rem] bg-cobalt-blue p-[3rem] text-white">
                    <div className="flex flex-col gap-y-[1rem] w-1/2 justify-center">
                        <div className="heading font-dela font-normal text-[4.5rem] text-left">
                            Feeling a bit lost?
                        </div>

                        <div className="font-chivo font-normal text-[1.5rem]">
                        GEMS is here to make the daunting task of travelling in a new city much more comfortable. Peruse our detailed travel guides on navigating the public transportation system and be free from all your anxiety and worry!  
                        </div>
                        
                        <div>
                            <button className="bg-black text-pastel-yellow px-[2rem] py-[1rem] rounded-[1.25rem] font-chivo font-normal text-[1.5rem]">
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div>
                        <img src="/homepage/feeling-lost-image.svg" alt="A polaroid of old Toronto city" />
                    </div>
                </section>
            </main>
        </>
    );
}