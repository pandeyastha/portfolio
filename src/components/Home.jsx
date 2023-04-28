
import selfImage from "../assets/portfolio/AsthaImage.jpg";
import {MdOutlineKeyboardArrowRight as Arr}  from "react-icons/md";
import { Link} from "react-scroll"

const Home = () => {
    return ( 
    <div name="home" className="
    h-screen
    w-full
    mt-400
    bg-gradient-to-b
    from-black
    via-black to-gray-800
    
    ">
        <div className="max-w-screen-lg mx-auto
        flex flex-col
        items-center
        justify-center
        h-full
        px-4
        md:flex-row">
            <div className="flex flex-col justify-center h-full ">
                <h2 className="text-3xl sm:text-6xl font-bold text-white "> 
                    I am a Full Stack Developer 
                </h2>
                <p className="text-gray-500 py-4 max-w-md">
                    I have 1+ year of experience building and designing software. 
                    Currently I love to work on web applications
                    using technologies like React , Tailwind , Next JS , TypeScript and Neo4j.
                </p>
                <Link to="project" smooth duration={600}
                 className="
                group
                text-white w-fit
                 px-6 py-3 
                 my-2 
                 flex 
                 items-center
                 rounded-md 
                 bg-gradient-to-r
                 from-cyan-500 to-blue-500
                 cursor-pointer">
                    Portfolio 
                    <span className="group-hover:rotate-90 duration-300">
                        <Arr size={25} className="ml-1"/>
                    </span>
                </Link>

            </div>
            <div>
                <img src={selfImage} alt="selfImg" className="rounded-2xl
                mx-auto
                w-2/3
                md:w-1/2"/>

            </div>
        </div>     
    </div> );
}
 
export default Home;