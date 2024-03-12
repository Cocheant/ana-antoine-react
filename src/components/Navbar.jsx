import { NavLink } from "react-router-dom"
import { FormattedMessage } from 'react-intl';

const Navbar = () => {
    return (
        <header className="header">
            <NavLink to="/" className="w-10 h-10  items-center  justify-start flex font-bold ">
                <p className="text-2xl orange-gradient_text hover:#B45309">A&A</p>

            </NavLink>

            <nav className="flex text-base gap-7 font-light ml-5">
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

            </nav>

        </header>
    )
}

export default Navbar
