import image from '../assets/image.png';
import images from '../assets/book-lock.png';
import img from '../assets/hand-platter.png';
import React, {useState, useEffect} from 'react'

export const HeroPage = () => {
    const [herosec, setherosec] = useState(false)
    useEffect(() => {
        setTimeout(() => setherosec(true),100)
    }, []);
    return (
        <div className={`flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-100 min-h-screen transition-transform duration-1000 ease-out ${ herosec ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
            <div className="max-w-[1300px] w-full mx-auto flex flex-col lg:flex-row items-center justify-between mt-8 sm:mt-12 md:mt-16 lg:mt-20">
                <div className="lg:w-1/2 text-center lg:text-left px-4 sm:px-6 md:px-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mt-8 sm:mt-12 md:mt-16 lg:mt-20 text-gray-800 leading-tight">
                        Experience the Art of <span className="text-[#db2777]">Hair Styling</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 mt-4 sm:mt-6 md:mt-8 leading-relaxed">
                        Where style meets confidence. Our expert stylists create looks that enhance your natural beauty and express your unique personality.
                    </p>
                    <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                        <a
                            href="/appointment"
                            className="bg-[#db2777] text-white px-6 sm:px-8 py-3 rounded-lg shadow-md hover:bg-[#be185d] cursor-pointer  font-medium flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg"
                        >
                            <span className="flex items-center gap-2">
                                Book Appointment
                                <img src={images} alt="icon" className="w-5 h-5 invert" />
                            </span>
                        </a>
                        <a 
                            href="/premium"
                            className="bg-white text-black px-6 sm:px-8 py-3 rounded-lg shadow-md hover:bg-gray-50 font-medium flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg"
                        >
                            <span className="flex items-center gap-2">
                                Explore Services
                                <img src={img} alt="icon" className="w-5 h-5" />
                            </span>
                        </a>
                    </div>
                </div>
                <div className="lg:w-1/2 mt-10 sm:mt-12 md:mt-16 lg:mt-0 flex justify-center px-4 sm:px-6">
                    <img
                        src={image}
                        alt="Hair Styling"
                        className="rounded-lg shadow-lg w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain"
                    />
                </div>
                
            </div>
            
        </div>
    );
};