import { useEffect, useState } from "react";







const Heading = () => {

    const [langIndex,setLangIndex] =useState(0);
    const updateLanguage= ()=>{
        setLangIndex((langIndex+1) %languages.length);
    }
    useEffect(()=>{
        const intervalId= setInterval(updateLanguage,2000);
        return ()=>clearInterval(intervalId);
    });
    const languages = [
        {name: 'English', text: 'Hello!'},
        {name: 'Spanish', text: 'Hola!'},
        {name: 'French', text: 'Bonjour!'},
        {name: 'German', text: 'Guten Tag!'},
        
      ];
      
      const language = languages[langIndex];

    return (  <div>
            <p>{language.text}</p>
    </div>);
}
 
export default Heading;


