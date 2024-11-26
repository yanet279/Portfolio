import { GlobeIcon } from "lucide-react"
import My from "../../assets/YanetChoque.jpg"
import { Networks } from "../common/Networks"

export const Introduction = () => {
    return (
        <div className="flex flex-col w-full m-auto items-center mb-10 lm:flex-row gap-7 lm:gap-0 lm:justify-around ">
            <img src={My} alt="" className="rounded-3xl w-[190px] h-[225px] lg:w-[220px] lg:h-[270px] xl:w-[280px] xl:h-[335px] z-50 lm:mr-10"/>
            <div className="flex flex-col items-center xl:gap-1.5">
                <p className="font-semibold text-[30px] md:text-[32px] xl:text-[42px]">Yanet Soledad Choque Cayo</p>
                <p className="text-red-300 text-[22px] xl:text-[28px]">Desarrolladora Full Stack</p>
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