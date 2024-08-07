export default function Header(){
    return (
        <>
            <div className="flex items-center justify-between gap-x-[10] px-[8rem] py-[1.5rem] bg-amber w-full">
                <div className="logo font-dela font-normal text-[3.125rem]">
                    Gems
                </div>

                <div className="nav-menu font-chivo">
                    <nav>
                        <ul className="flex justify-center items-center gap-[5rem]">
                            <li>
                                <button className="px-[1.33rem] py-[0.625rem] border border-black rounded-[1.33rem]">Explore</button>
                            </li>
                            <li>
                                <button className="px-[1.33rem] py-[0.625rem] border border-black rounded-[1.33rem]">Communities</button>
                            </li>
                            <li>
                                <button className="px-[1.33rem] py-[0.625rem] border border-black rounded-[1.33rem]">Transport 101</button>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="icon-set flex items-center gap-[1rem] font-normal text-[1.5rem]">
                    <div>
                        <a href="#">
                            <img src="/homepage/account-icon.svg" alt="A circle with a person inside icon" />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src="/homepage/diamond-icon.svg" alt="A diamond icon" />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src="/homepage/search-icon.svg" alt="A search icon" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}