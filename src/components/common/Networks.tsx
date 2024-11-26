import { socialNetworks } from "../../data/data-id";
import { MotionTransition } from "../common/transition-component";
import { Link } from "react-router-dom";

export const Networks = () => {
    return (
        <MotionTransition position="right" className="-ml-12">
            <div className="flex gap-7">
                {socialNetworks.map(({ logo, src, id }) => (
                    <Link
                        key={id}
                        to={src}
                        target="_blank"
                        className="flex items-center duration-300 w-9 h-9 border-stone-700 hover:text-secondary hover:border-secondary border-[0.5px] p-1.5 rounded-[10px] hover:bg-zinc-900 z-50 xl:w-10 xl:h-10"
                    >
                        {logo}
                    </Link>
                ))}
            </div>
        </MotionTransition>
    )
}
