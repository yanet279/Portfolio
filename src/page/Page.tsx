import Navbar from "../components/common/Navbar"
import { AboutMe } from "../components/layout/AboutMe"
import { Education } from "../components/layout/Education"
import { Header } from "../components/layout/Header"
import { Introduction } from "../components/layout/Introduction"
import { Projects } from "../components/layout/Projects"
import { Skills } from "../components/layout/Skills"
// import { WorkExperience } from "../components/layout/WorkExperience"

export const Page = () => {
    return (
        <div className="relative flex flex-col py-40 bg-neutral-900 text-white ">
            <div className="absolute inset-0 bg-fuchsia-600 bg-[size:20px_20px] opacity-20 blur-[200px] lg:blur-[350px]"></div>
            <Header />
            <div className="flex flex-col px-10 md:px-20 lg:px-40 gap-24">
                <Introduction />
                <AboutMe />
                <Projects />
                {/* <WorkExperience /> */}
                <Education />
                <Skills />
            </div>
                <Navbar />
        </div>
    )
}
