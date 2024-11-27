import img1 from "../../assets/skills/icons8-html-144.png"
import img2 from "../../assets/skills/icons8-css-144.png"
import img3 from "../../assets/skills/icons8-js-144.png"
import img4 from "../../assets/skills/icons8-nodejs-144.png"
import img5 from "../../assets/skills/icons8-reaccionar-nativo-144.png"
import img6 from "../../assets/skills/icons8-python-144.png"
import img7 from "../../assets/skills/icons8-php-80.png"
import img8 from "../../assets/skills/icons8-redux-144.png"
import img9 from "../../assets/skills/icons8-c-144.png"
import img10 from "../../assets/skills/icons8-viento-de-cola-css-144.png"
import img11 from "../../assets/skills/icons8-oreja-144.png"
import img12 from "../../assets/skills/icons8-hablar-con-descaro-a-144.png"
import img13 from "../../assets/skills/icons8-git-144.png"
import img14 from "../../assets/skills/mongodb_original_wordmark_logo_icon_146425.png"
import img15 from "../../assets/skills/icons8-base-de-datos-80.png"
import img16 from "../../assets/skills/icons8-mysql-144.png"
import img17 from "../../assets/skills/icons8-github-144.png"


export const Skills = () => {
    return (
        <div id="skills">
            <h2 className="text-[28px] font-bold text-secondary mb-8">Habilidades</h2>
            <div className="flex flex-wrap gap-7 md:gap-9 justify-center">
                <p className="text-center text-[14px] sm:text-[16px]"><img src={img1} alt="html" className="w-[70px] h-[70px] md:w-[85px] md:h-[85px]"/>HTML</p>
                <p className="text-center text-[14px] sm:text-[16px]"><img src={img2} alt="css" className="w-[70px] h-[70px] md:w-[85px] md:h-[85px]"/>CSS</p>
                <p className="text-center text-[14px] sm:text-[16px]"><img src={img3} alt="js" className="w-[70px] h-[70px] md:w-[85px] md:h-[85px]"/>JAVASCRIPT</p>
                <p className="text-center text-[14px] sm:text-[16px]"><img src={img5} alt="react" className="w-[70px] h-[70px] md:w-[85px] md:h-[85px]"/>REACT</p>
                <p className="text-center text-[14px] sm:text-[16px]"><img src={img4} alt="node.js" className="w-[70px] h-[70px] md:w-[85px] md:h-[85px]"/>NODE.JS</p>
                <p className="text-center text-[14px] sm:text-[16px]"><img src={img6} alt="python" className="w-[70px] h-[70px] md:w-[85px] md:h-[85px]"/>PYTHON</p>
                <p className="text-center text-[14px] sm:text-[16px]"><img src={img7} alt="php" className="w-[70px] h-[70px] md:w-[85px] md:h-[85px]"/>PHP</p>
                <p className="text-center text-[14px] sm:text-[16px]"><img src={img8} alt="redux" className="w-[70px] h-[70px] md:w-[85px] md:h-[85px]"/>REDUX</p>
                <p className="text-center text-[14px] sm:text-[16px]"><img src={img9} alt="c" className="w-[70px] h-[70px] md:w-[85px] md:h-[85px]"/>C</p>
                <p className="text-center text-[14px] sm:text-[16px]"><img src={img10} alt="tailwind" className="w-[70px] h-[70px] md:w-[85px] md:h-[85px]"/>TAILWIND</p>
                <p className="text-center text-[14px] sm:text-[16px]"><img src={img11} alt="bootstrap" className="w-[70px] h-[70px] md:w-[85px] md:h-[85px]"/>BOOTSTRAP</p>
                <p className="text-center text-[14px] sm:text-[16px]"><img src={img12} alt="sass" className="w-[70px] h-[70px] md:w-[85px] md:h-[85px]"/>SASS</p>
                <p className="text-center text-[14px] sm:text-[16px]"><img src={img13} alt="git" className="w-[70px] h-[70px] md:w-[85px] md:h-[85px]"/>GIT</p>
                <p className="text-center text-[14px] sm:text-[16px]"><img src={img14} alt="git" className="w-[70px] h-[70px] md:w-[85px] md:h-[85px]"/>MONGODB</p>
                <p className="text-center text-[14px] sm:text-[16px]"><img src={img15} alt="sql" className="w-[70px] h-[70px] md:w-[85px] md:h-[85px]"/>SQL</p>
                <p className="text-center text-[14px] sm:text-[16px]"><img src={img16} alt="mysql" className="w-[70px] h-[70px] md:w-[85px] md:h-[85px]"/>MYSQL</p>
                <p className="text-center text-[14px] sm:text-[16px]"><img src={img17} alt="github" className="w-[70px] h-[70px] md:w-[85px] md:h-[85px]"/>GITHUB</p>
            </div>
        </div>
    )
}
