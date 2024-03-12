import { NavLink } from "react-router-dom"
import { FormattedMessage } from 'react-intl';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from 'react-icons/fa'

const Navbar = () => {

    // nav is starting off false
    const [nav, setNav] = useState(false);
    // so when user clicks the hamburger button, it goes from false(!nav) to true(nav)
    const handleClick = () => setNav(!nav);

    return (
        <header className="header">
            <NavLink to="/" className="w-10 h-10  items-center  justify-start flex font-bold ">
                <p className="text-2xl orange-gradient_text hover:#B45309">A&A</p>

            </NavLink>

            <nav className="flex text-base gap-9 font-light">
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
                {/* Mobile Menu */}

/*
                <div className=' md:hidden z-10' onClick={handleClick}>
                    {nav ? <FaTimes size={25} color='white' /> : <RxHamburgerMenu size={25} />}
                </div>
                <ul
                    className={`${nav
                            ? 'text-white opacity-100 transform translate-x-0'
                            : 'opacity-0 transform -translate-y-full'
                        } transition-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl`}
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
                */
            </nav>

        </header>
    )
}

export default Navbar
