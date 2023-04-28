import github from "../assets/github.png"
import Html from "../assets/html.png"
import JavaScript from "../assets/javascript.png"
import React from "../assets/react.png"
import Nextjs from "../assets/nextjs.png"
import Tailwind from "../assets/tailwind.png"
import TypeScript from "../assets/typescript.png"
import MongoDB from "../assets/mongodb.png"
import Cpp from "../assets/c.png"
import Mysql from "../assets/mysql.png"
import Neo4j from "../assets/neo4j.png"
import Java from "../assets/java.png"


const Skills = () => {
    const skills =[
        {
            id:1,
            src: Cpp,
            title: 'C++',
            style: "shadow-blue-500",
        },
        {
            id:2,
            src: Html,
            title: 'HTML',
            style: "shadow-orange-500",
        },
        {
            id:3,
            src: JavaScript,
            title: 'JavaScript',
            style: "shadow-yellow-500",
        },
        {
            id:4,
            src: github,
            title: 'Github',
            style: "shadow-gray-400",
        },
        {
            id:5,
            src: TypeScript,
            title: 'TypeScript',
            style: "shadow-cyan-500",
        },
        {
            id:6,
            src: React,
            title: 'React',
            style: "shadow-blue-600",
        },
        {
            id:7,
            src: Nextjs,
            title: 'Nextjs',
            style: "shadow-white",
        },
        {
            id:8,
            src: Tailwind,
            title: 'Tailwind',
            style: "shadow-sky-400",
        },
        {
            id:9,
            src: Java,
            title: 'Java',
            style: "shadow-blue-300",
        },
        {
            id:10,
            src: MongoDB,
            title: 'MongoDB',
            style: "shadow-green-500",
        },
        {
            id:11,
            src: Neo4j,
            title: 'Neo4j',
            style: "shadow-orange-500",
        },
        {
            id:12,
            src: Mysql,
            title: 'MySQL',
            style: "shadow-orange-500",
        },
    ]

    return ( <div name="skills" 
    className="skill-container bg-gradient-to-b
    from-gray-800 to-black 
    w-full 
    h-full">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div >
                <br/>
                <br/>
                <br/>
                <p className="text-5xl font-bold border-b-4 border-gray-500 p-2 inline ">
                    Skills</p>
                <p className="py-6">These are the technologies I have worked with-</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0"
            >

                {
                    skills.map((skill) =>(
                    <div key={skill.id }className={`shadow-md hover:scale-105 duration-500 py-2 
                    rounded-lg
                    ${skill.style}`}>
                       <img className="rounded-full"src={skill.src} alt="" />
                    <div className="">  <p className="mt-4 text-bold"  >{skill.title}</p></div>
                        
                     </div>
                    ))
                }
                
            </div>
        </div>
    </div> );
}
 
export default Skills;