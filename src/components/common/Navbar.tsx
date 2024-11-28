import { itemsNavbar } from "../../data/data-id";
import { MotionTransition } from "./transition-component";
import { useEffect, useState } from "react";


const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [atScrollEnd, setAtScrollEnd] = useState(false);

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

    const handleScrollToSection = (link: string) => {
        if (link === "#home") {
            window.scrollTo({ top: 0, behavior: "smooth" }); // Desplaza al inicio de la página.
        } else {
            const section = document.querySelector(link); // Busca el elemento con el ID correspondiente.
            if (section) {
                section.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave.
            }
        }
    };

    return (
        <>
            {showNavbar && (
                <MotionTransition position="right"
                    className={`fixed z-50 flex w-full mt-auto h-max ${
                        atScrollEnd ? ' bg-[#2c1f31c2] dark:bg-white/15 h-[60px] md:h-[70px] lg:h-20 items-center justify-center bottom-0' : 'justify-end top-56 pr-2 sm:pr-3 lg:pr-4'
                    }`}
                >
                    <nav className="flex h-[55px] items-center">
                        <div
                            className={`flex gap-2 rounded-full backdrop-blur-sm my-auto ${
                                atScrollEnd
                                    ? 'bg-transparent lg:bg-transparent items-center justify-center flex-row'
                                    : 'bg-[#2c1f31c2] dark:bg-white/15 flex-col px-1 py-2 sm:px-2'
                            }`}
                        >
                            {itemsNavbar.map((item) => (
                                <div key={item.id}
                                    className={`px-1 py-1 sm:px-2 sm:py-2 transition duration-150 rounded-full cursor-pointer hover:bg-[#d9b0e9] dark:hover:bg-secondary text-white`}
                                    onClick={() => handleScrollToSection(item.link)}
                                >
                                    {item.icon}
                                </div>
                            ))}
                        </div>
                    </nav>
                </MotionTransition>
            )}
        </>
    );
};

export default Navbar;