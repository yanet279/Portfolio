import { itemsMenu } from "../../data/data-id";
import { MotionTransition } from "../common/transition-component";
import { Link } from "react-router-dom";

export const Header = () => {
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
                        <h1 className="mt-3 mb-5 text-4xl font-bold pl-5 sp:text-center md:text-left md:text-[40px] lg:text-[50px]">
                            &lt;&#47;&gt;
                        </h1>
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
        </MotionTransition>
    )
}
