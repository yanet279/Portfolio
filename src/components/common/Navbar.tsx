import { Link, useLocation } from "react-router-dom";
import { itemsNavbar } from "../../data/data-id";
import { MotionTransition } from "./transition-component";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [atScrollEnd, setAtScrollEnd] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const scrollHeight = document.documentElement.scrollHeight;

            if (window.scrollY > 0) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }

            if (scrollPosition >= scrollHeight) {
                setAtScrollEnd(true);
            } else {
                setAtScrollEnd(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {showNavbar && (
                <MotionTransition
                    position="right"
                    className={`fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10 ${
                        atScrollEnd ? 'bg-white/15 h-20 -mb-10 lg:h-24' : ''
                    }`} // Cambia el estilo según el estado
                >
                    <nav>
                        <div className={`flex items-center bg-white/15 justify-center gap-2 px-4 py-1 rounded-full backdrop-blur-sm ${
                        atScrollEnd ? 'bg-transparent lg:bg-transparent' : ''}`}>
                            {itemsNavbar.map((item) => (
                                <div
                                    key={item.id}
                                    className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${location.pathname === item.link && 'bg-secondary'}`}
                                    data-tooltip-target="tooltip-default"
                                >
                                    <Link to={item.link}>{item.icon}</Link>
                                </div>
                            ))}
                        </div>
                    </nav>
                </MotionTransition>
            )}
        </>
    );
}

export default Navbar;