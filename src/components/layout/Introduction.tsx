import { GlobeIcon } from "lucide-react"
import My from "../../assets/YanetChoque.jpg"
import { Networks } from "../common/Networks"

export const Introduction = () => {
    return (
        <div className="flex flex-col w-full m-auto items-center mb-10 lm:flex-row gap-7 lm:gap-0">
            <img src={My} alt="" className="rounded-3xl w-[180px] h-[205px] lg:w-[270px] lg:h-[320px] z-50 lm:mr-20"/>
            <div className="flex flex-col items-center">
                <p className="font-semibold text-[30px] md:text-[32px]">Yanet Soledad Choque Cayo</p>
                <p className="text-red-300 text-[22px]">Desarrolladora Full Stack</p>
                <div className="flex gap-2">
                    <GlobeIcon />
                    <div className="flex flex-col gap-5">
                        <p>Buenos Aires, Argentina</p>
                        <Networks />
                    </div>
                </div>
            </div>
        </div>
    )
}