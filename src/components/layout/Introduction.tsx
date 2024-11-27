import { GlobeIcon } from "lucide-react"
import My from "../../assets/YanetChoque.jpg"
import { Networks } from "../common/Networks"

export const Introduction = () => {
    return (
        <div className="flex flex-col w-full m-auto items-center mt-4 mb-8 lm:flex-row gap-7 lm:gap-0 lm:justify-around ">
            <img src={My} alt="" className="rounded-3xl w-[205px] h-[245px] lm::w-[220px] lm:h-[270px] xl:w-[280px] xl:h-[335px] z-50 lm:mr-10"/>
            <div className="flex flex-col items-center gap-1 xl:gap-1.5">
                <p className="font-semibold text-[23px] sm:text-[30px] md:text-[32px] xl:text-[42px]">Yanet Soledad Choque Cayo</p>
                <p className="text-red-300 text-[20px] sm:text-[22px] xl:text-[28px]">Desarrolladora Full Stack</p>
                <div className="flex gap-2">
                    <GlobeIcon className="w-5" />
                    <div className="flex flex-col gap-5">
                        <p>Buenos Aires, Argentina</p>
                        <Networks />
                    </div>
                </div>
            </div>
        </div>
    )
}