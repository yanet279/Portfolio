import { LucideGithub } from "lucide-react"
import { dataPortfolio} from "../../data/data-id"
import "../../../fontawesome/css/all.min.css"

export const Projects = () => {

    return (
        <div className="z-20" id="project">
            <h2 className="text-[28px] mb-8 font-bold text-secondary">Proyectos</h2>
            <div className="flex flex-col lm:flex-wrap gap-8 md:gap-6 lm:flex-row items-center lm:items-stretch lm:justify-center">
                {dataPortfolio.map((data) => (
                    <div key={data.id} className="border w-[70vw] border-[#69707c9d] relative px-6 pt-6 pb-7 rounded-2xl sm:px-[35px] sm:pb-8 lm:w-[37.5vw] lm:px-6 lm:pt-6 lm:pb-7 lx:w-[32.2vw] xl:w-[23.2vw]">
                        <div className="font-semibold text-lg">
                            <a href={data.urlDemo} target="_blank">{data.title}</a>
                        </div>
                        <div className="flex border rounded-full w-8 h-8 hover:bg-[#0a0a0a9c] absolute right-5 top-4 items-end justify-center sm:right-9 sm:top-6 lm:right-6 lm:top-8">
                            <a href={data.urlGithub} target="_blank">
                                <LucideGithub />
                            </a>
                        </div>
                        <div className="text-[15px] pb-4 md:pb-3 text-gray-400">{data.subtitle}</div>

                        <div className="">
                            <a href={data.urlDemo} target="_blank">
                                <img src={data.image} alt="" className="rounded-xl "/>
                            </a>
                        </div>
                        <div className="w-full mt-5 flex gap-4 items-center justify-center">
                            {data.technology}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}