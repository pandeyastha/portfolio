const Contact = () => {
    return ( 
    <div name="contact" 
    className="w-full h-full bg-gradient-to-b
     from-black
    to-gray-800 p-4 text-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-5xl font-bold inline border-b-4 border-gray-500">
                    Contact</p>
                <p className="py-6">Wanna discuss something cool? Spill the beans in the form and i'll reach out ASAP</p>
            </div>
            {/*form div begins here */}

            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/88ab3808-6393-4255-87e3-15e64d327cd7"
                method="POST" className="flex flex-col w-full md:w-1/2">
                    <input type="text" name="name" placeholder="Enter your name!"
                    className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />
                     <input type="text" name="email" placeholder="Enter your email"
                    className="my-5 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />
                    <textarea name="message" rows="10" placeholder="Enter your message..."
                    className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" >
                    </textarea>
                    <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-centre
                    rounded-md hover:scale-115 duration-300">Let's talk</button>
                </form>
            </div>
        </div>
    </div> );
}
 
export default Contact;