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
            <p className="text-xl mt-8">I am an Avid problem-solver with a keen intrest in cutting edge technologies.I graduated in 2021 with a 
            degree in Bachelor's of Technology in Computer Science and Engineering .</p>
            <br />
            <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia error vel dolorum eaque doloribus, 
                iam omnis sapiente ullam consequuntur vitae reprehenderit illum dolores consectetur dolore, ducimus assumenda? Sunt quis suscipit consectetur hic ipsam aut, asperiores illum. Obcaecati veritatis omnis molestias, officiis tempore dignissimos veniam ea nesciunt, minus harum nisi cumque rerum non atque. Temporibus nisi deserunt rem est magni maiores, at commodi dolorum.
            </p>
            <button
                className="
                group
                text-white w-fit
                 px-6 py-3 
                 my-6 
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