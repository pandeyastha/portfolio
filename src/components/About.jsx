import {MdOutlineKeyboardArrowRight as DownArr}  from "react-icons/md";


const About = () => {
    return ( 
    <div name="about"
    className="w-full
     h-full
     bg-gradient-to-b
    from-gray-800 to-black
    text-white ">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 ">
                <p className="text-5xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>
            <p className="text-xl mt-6">I am an avid problem-solver with a keen intrest in cutting edge technologies.I graduated in 2021 with a 
            degree in Bachelor's of Technology in Computer Science and Engineering .</p>
            <br />
            <p className="text-xl">
            I am skilled in software development and Web Development. I have previously worked for 
            Tata Consultancy Services as a software developer and have 
            worked as an AR developer for School of Innovation by Meta. I'm proficient in data structures
            and algorithms and can efficienly maintain your system resources by writing optimized code :)
            Other than coding , i find myself inclined towards fashion, its history and symbolism. From coding to couture- I find 
            joy in both worlds.
            
                
            </p>
            <button
                className="
                group
                text-white w-fit
                 px-6 py-3 
                 my-7
                 flex 
                 items-center
                 rounded-md 
                 bg-gradient-to-r
                 from-cyan-500 to-blue-500
                 cursor-pointer">
                   <a href="/resume.pdf" onClick={()=> {}} download> My Resume </a>
                    <span className="group-hover:rotate-90 duration-300">
                    <DownArr size={25} className="ml-1"/>
                    </span>
                </button>
       
        </div>

    </div> );
}
 
export default About;