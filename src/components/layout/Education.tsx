import { dataAboutPage } from "../../data/data-id"

export const Education = () => {
    return (
        <div className="flex flex-col justify-center z-20" id="education">
            <h2 className="text-[28px] font-bold text-secondary mb-4 lg:mb-8">Educación</h2>
            <div className="w-full max-w-3xl mx-auto">
                <div className="-my-2">
                    {dataAboutPage.map((data) => (
                        <div key={data.id} className="relative py-3 px-[70px] group ">
                            <div className="flex flex-col sm:flex-row items-start 
                                        group-last:before:hidden before:absolute before:top-[27px]
                                        before:h-full before:left-4 before:w-[1px] before:bg-[#696666d0]  
                                        sm:before:ml-[0rem] before:self-start before:-translate-x-1/2 
                                        after:absolute after:left-4 after:w-3 after:h-3 after:bg-secondary 
                                        after:border-[6px] after:box-content after:border-[#534f4fbb] 
                                        after:rounded-full after:-translate-x-1/2 after:top-[17px]">
                            </div>
                            <h3 className="mb-1 text-lg font-medium sm:mb-0">{data.title}</h3>
                            <time className="top-[26px] md:absolute md:right-0 md:top-5 inline-flex  text-xs font-semibold uppercase w-32 h-6 rounded-full">{data.date}</time>
                            <div className="font-medium text-gray-400">{data.subtitle}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
