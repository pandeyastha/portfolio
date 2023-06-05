import proj1 from "../assets/portfolio/aphrodify.jpg"
import proj11 from "../assets/portfolio/chirper.jpg"
import proj2 from "../assets/portfolio/Sociaux-de-paris.png"
import proj3 from "../assets/portfolio/synthia.png"
import proj4 from "../assets/portfolio/My Portfolio website.png"


const Projects = () => {
    const projects=[
        {
            id:1,
            src:proj1,
            demo:"https://next-aphrodify-astha.vercel.app/",
            code: "https://github.com/pandeyastha/Aphrodify"
            
        },
        {
            id:2,
            src:proj11,
            demo: "https://chirp1-2-i5ibx4eoc-practicelc1-gmailcom.vercel.app/",
            code: "https://github.com/pandeyastha/chirp1.2",
        },
        {
            id:3,
            src:proj3,
            demo:"https://cynthia-asp.vercel.app/",
            code:"https://github.com/pandeyastha/Synthia"

        },
        {
            id:4,
            src:proj4,
            demo:"https://portfolio-asthapandey.vercel.app/",
            code:"https://github.com/pandeyastha/portfolio"
        },
        {
            id:5,
            src:proj2,
            demo: "https://sociaux-de-paris.web.app/",
            code: "https://github.com/pandeyastha/sociaux-de-paris",
            
        },
        
        
    ]



    return ( <div
    name="project"
    className="bg-gradient-to-b
    from-black to-gray-800
    w-full
    text-white
    md:h-full ">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-centerw-full h-full">
            <div className="pb-8">
                <p className="text-5xl font-bold inline border-b-4 border-gray-500">Projects</p>
                <p className="py-6 text-xl">Check out some of my work right here</p>
            </div>

            <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {
                projects.map((project) => (
                    
                    <div key={project.id} className="shadow-md shadow-gray-600 rounded-lg">
                        <img 
                        className="rounded-md duration-200 hover:scale-117"
                        src={project.src} 
                        alt="" 
                        />
    
                        <div className="flex items-center justify-center">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 
                            hover:scale-105"><a href={project.demo} 
                            target="_blank"
                            rel= "noreferrer">Demo
                            </a></button>
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                <a href={project.code}
                                target="_blank"
                                rel= "noreferrer"
                                >
                            Code</a></button>
                        </div>
                    </div>
                
                ))
            }
           </div>
        </div>
    </div> );
}
 
export default Projects;
