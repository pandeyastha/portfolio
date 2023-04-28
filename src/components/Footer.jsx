import React from "react";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill,BsInstagram} from "react-icons/bs"



const Footer = () => {
    const links= [
        {
            id:1,
            child:(
                     <FaLinkedin size ={30} />
            ),
            href: "https://www.linkedin.com/in/pandey-astha/",
        },
        {
            id:2,
            child:(
                     <FaGithub size ={30} />
            ),
            href: "https://www.github.com/",
            
        },
        {
            id:3,
            child:(
                     <HiOutlineMail size ={30} />
            ),
            href: "mailto:asthaswe@gmail.com",
        },
        {
            id:4,
            child:(
                      <BsInstagram size ={30} />
            ),
            href: "https://www.instagram.com/_astha_pandey/",
        },
    ]

    return (
        <div className="bg-gray-800 text-gray-400">
        <div class="container mx-auto flex justify-between py-4">
        <div className="text-sm">
        <p>&copy; Astha Pandey.</p>
        </div>
           </div>
  </div>

      );
}
 
export default Footer;