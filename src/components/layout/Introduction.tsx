import { GlobeIcon } from "lucide-react"
import My from "../../assets/YanetChoque.jpg"
import { Networks } from "../common/Networks"

export const Introduction = () => {
    return (
        <div className="flex z-50 flex-col w-full m-auto items-center mt-4 mb-8 lm:flex-row gap-7 lm:gap-0 lm:justify-around">
            <img src={My} alt="My" className="rounded-3xl w-[205px] h-[245px] lm:w-[230px] lm:h-[270px] xl:w-[280px] xl:h-[335px]  lm:mr-10"/>
            <div className="flex flex-col items-center gap-1 xl:gap-1.5">
                <p className="font-semibold text-[23px] sm:text-[30px] md:text-[32px] xl:text-[42px]">Yanet Soledad Choque Cayo</p>
                <p className="dark:text-red-300 font-medium text-tercero text-[20px] sm:text-[22px] xl:text-[28px]">Desarrolladora Full Stack</p>
                <div className="flex gap-2">
                    <GlobeIcon className="w-5 text-gray-800 dark:text-gray-400" />
                    <div className="flex flex-col gap-5">
                        <p className="text-gray-800 dark:text-gray-400">Buenos Aires, Argentina</p>
                        <Networks />
                    </div>
                </div>
            </div>
        </div>
    )
}