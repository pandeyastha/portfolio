import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg"
import proj2 from "../assets/portfolio/installNode.jpg"
import proj3 from "../assets/portfolio/navbar.jpg"
import proj4 from "../assets/portfolio/reactParallax.jpg"


const Projects = () => {
    const projects=[
        {
            id:1,
            src:arrayDestruct
        },
        {
            id:2,
            src:proj2
        },
        {
            id:3,
            src:proj3
        },
        {
            id:4,
            src:proj4
        },
        {
            id:5,
            src:proj2
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
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
                <p className="py-6">Check out some of my work right here</p>
            </div>

            <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {
                projects.map((project) => (
                    
                    <div key={project.id} className="shadow-md shadow-gray-600 rounded-lg">
                        <img 
                        className="rounded-md duration-200 hover:scale-107"
                        src={project.src} 
                        alt="" 
                        />
    
                        <div className="flex items-center justify-center">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                        </div>
                    </div>
                
                ))
            }
           </div>
        </div>
    </div> );
}
 
export default Projects;