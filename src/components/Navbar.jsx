import { NavLink } from "react-router-dom"
import { FormattedMessage } from 'react-intl';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from 'react-icons/fa'
import { useState } from "react";

const Navbar = () => {

    // nav is starting off false
    const [nav, setNav] = useState(false);
    // so when user clicks the hamburger button, it goes from false(!nav) to true(nav)
    const handleClick = () => setNav(!nav);

    return (
        <header className="flex w-full justify-between items-center px-8 py-4  mx-auto bg-green/90 z-10 right-0 -left-0 top-0 sticky">
            <NavLink to="/" className="w-10 h-10  items-center justify-start flex font-bold ">
                <p className="text-2xl orange-gradient_text hover:#B45309">A&A</p>

            </NavLink>

            <nav className=" text-base gap-9 font-light hidden md:flex ">
                <div className="">
                    <NavLink to="/story" className={({ isActive }) => isActive ? 'text-amber-700' : 'text-orange-300'}>
                        <FormattedMessage
                            id="navbar.story"
                            defaultMessage="Our Story"
                        />

                    </NavLink>
                </div>
                <NavLink to="/travelstay" className={({ isActive }) => isActive ? 'text-amber-700' : 'text-orange-300'}>
                    <FormattedMessage
                        id="navbar.travelstay"
                        defaultMessage="Travel & Stay"
                    />

                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-amber-700' : 'text-orange-300'}>
                    <FormattedMessage
                        id="navbar.contact"
                        defaultMessage="Contact"
                    />


                </NavLink>

            </nav>
            <nav className=" text-base gap-9 font-light md:hidden">

                {/* Mobile Menu */}


                <div className=' md:hidden z-10  ' onClick={handleClick}>
                    {nav ? <FaTimes size={25} color='rgb(253, 186, 116)' /> : <RxHamburgerMenu size={25} color='rgb(253, 186, 116)' />}
                </div>
                <ul
                    className={`${nav
                        ? 'text-white opacity-100 transform translate-x-0 duration-500'
                        : 'opacity-0 transform -translate-y-full '
                        } transition-transform  duration-500 absolute top-0 left-0 w-full h-screen bg-green/80 flex flex-col justify-center items-center text-2xl`}
                    onClick={() => setNav(false)}
                >
                    <NavLink to="/story" className={({ isActive }) => isActive ? 'text-amber-700' : 'text-orange-300'}>
                        <FormattedMessage
                            id="navbar.story"
                            defaultMessage="Our Story"
                        />

                    </NavLink>

                    <NavLink to="/travelstay" className={({ isActive }) => isActive ? 'text-amber-700' : 'text-orange-300'}>
                        <FormattedMessage
                            id="navbar.travelstay"
                            defaultMessage="Travel & Stay"
                        />
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-amber-700' : 'text-orange-300'}>
                        <FormattedMessage
                            id="navbar.contact"
                            defaultMessage="Contact"
                        />
                    </NavLink>

                </ul>

            </nav>

        </header>
    )
}

export default Navbar
