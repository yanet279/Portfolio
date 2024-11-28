import { useEffect } from "react";
import { itemsMenu } from "../../data/data-id";
import { MotionTransition } from "../common/transition-component";
import { Link } from "react-router-dom";
import { useTheme } from "../common/useTheme";
import { Moon, Sun } from "lucide-react";

export const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
    }, [theme]);

    const scrollTo = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-3">
            <header className="sm:pl-10 z-30 md:w-[80%]">
                <div className="container max-w-6xl mx-auto md:flex md:justify-between">
                    <Link to='/'>
                        <div className="mt-3 flex mb-6 text-4xl pl-5 sp:text-center md:text-left md:text-[40px] lg:text-[50px]">
                            <div className="dark:text-[#ffcceb] text-[50px] sm:text-[59px] font-semibold">&lt;</div>
                            <div className="dark:text-secondary text-[35px] sm:text-[45px] font-medium -mt-0.5 -ml-0.5 sm:-mt-1 sm:-ml-0.5">&#47;</div>
                            <div className="dark:text-[#fd42b5] text-[32px] sm:text-[42px] font-semibold -ml-[2.5px] -mt-0.5 sm:-mt-[1px] sm:-ml-[5px]">&gt;</div>
                        </div>
                    </Link>
                    <div className="flex items-center justify-center gap-6 sm:gap-7">
                        {itemsMenu.map(({ title, src, id }) => (
                            <div key={id} className='cursor-pointer font-medium text-[15px] sm:text-[16px] menuText hover:text-tercero dark:hover:text-secondary lg:text-[18px]' onClick={() => { scrollTo(src);}}>
                                {title}
                            </div>
                        ))}
                    </div>
                </div>
            </header>
            <div className="absolute cursor-pointer top-[18px] z-50 right-6 md:top-4 md:right-[56px] border-2 hover:text-[#d9b0e9] border-black hover:border-[#2c1f31] hover:bg-[#2c1f31] dark:border-white dark:hover:border-secondary dark:hover:bg-secondary dark:hover:text-gray-900 rounded-full p-1 sm:p-1.5">
            {theme === 'dark' ? (
            <Sun onClick={toggleTheme} className="text-white dark:hover:text-gray-900 w-6 h-6 sm:w-7 sm:h-7"/>
            ) : (
            <Moon onClick={toggleTheme} className="w-6 h-6 sm:w-7 sm:h-7"/>
            )}
        </div>
        </MotionTransition>
    )
}
