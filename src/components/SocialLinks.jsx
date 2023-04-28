import React from "react";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill,BsInstagram} from "react-icons/bs"

const SocialLinks = () => {
    const links= [
        {
            id:1,
            child:(
                <>
                    LinkedIn  <FaLinkedin size ={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/pandey-astha/",
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                    Github  <FaGithub size ={30} />
                </>
            ),
            href: "https://www.github.com/",
            
        },
        {
            id:3,
            child:(
                <>
                    Mail  <HiOutlineMail size ={30} />
                </>
            ),
            href: "mailto:asthaswe@gmail.com",
        },
        {
            id:4,
            child:(
                <>
                    Instagram  <BsInstagram size ={30} />
                </>
            ),
            href: "https://www.instagram.com/_astha_pandey/",
            style: 'rounded-br-md',
        },
        

    ]



    return (<div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>

            {
                links.map((elem) => (
                    <li key={elem.id}
                    className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500"+ " " + elem.style} >
                        <a href={elem.href}
                        className="flex justify-between items-center w-full text-white"
                        download={elem.download}
                        target="_blank"
                        rel= "noreferrer"
                        >
                            {elem.child}
                        </a>
                    </li>
                ))}

           
        </ul>
    </div>);
};
 
export default SocialLinks;