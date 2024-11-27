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
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5">
            <header className="sm:px-10 z-30">
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link to='/'>
                        <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                            &lt;&#47;&gt;
                        </h1>
                    </Link>
                    <div className="flex items-center justify-center gap-6 sm:gap-7">
                        {itemsMenu.map(({ title, src, id }) => (
                            <div key={id} className='cursor-pointer text-[15px] sm:text-[16px] menuText hover:text-secondary' onClick={() => { scrollTo(src);}}>
                                {title}
                            </div>
                        ))}
                    </div>
                </div>
            </header>
        </MotionTransition>
    )
}
