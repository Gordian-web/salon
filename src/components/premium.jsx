import React, {useState, useEffect} from "react"
import coloringimg from '../assets/firsthair image.png';
import hairstylingimg from '../assets/haircutstyling image.png';
import treatmentImg from '../assets/treatment image.png';
import beardImg from '../assets/beard image.png';
import sci from '../assets/scissors-line-dashed.png';
import scissors from '../assets/scissors.png';
import spray from '../assets/spray-can.png';
import bubbles from '../assets/bubbles.png';

export const PreMium = () => {
    const [premium, setpremium] = useState();
    React.useEffect(() => {
        setTimeout(() => setpremium(true), 100);
    }, [])
    return (
        <div className={`bg-[#ffffff]-100 p-4 sm:p-8 md:p-12 lg:p-16 md:mt-2 mt-20 transition-transform duration-1000 ease-out ${premium ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
            <div className="max-w-[1600px] mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-3xl md:mt-10 font-bold text-gray-800 mb-4">Our Premium Services</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-10">
                    We offer a comprehensive range of hair care services designed to meet the unique needs of all <br className="hidden sm:block" /> our clients, regardless of gender.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 sm:mt-12">
                    {/* Haircuts & Styling */}
                    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:translate-y-2 transition-transform duration-300 flex flex-col justify-between">
                        <div className="flex flex-col items-start">
                            <div className="mb-4 sm:mb-6 w-full flex justify-center">
                                <div className="border-0 border-white-200 p-0 flex items-center justify-center w-36 h-32 sm:w-44 sm:h-40 md:w-57 md:h-54 overflow-hidden">
                                    <img
                                        src={hairstylingimg}
                                        alt="Haircuts & Styling"
                                        className="w-full h-full rounded-2xl object-cover transition-transform duration-500 ease-in-out hover:translate-x-4 object-top"
                                    />
                                </div>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4 text-left">Haircuts & Styling</h3>
                            <p className="text-gray-600 text-sm sm:text-base md:text-lg text-left">Personalized cuts and styles for all genders, tailored to enhance your unique features and personality.</p>
                        </div>
                        <div className="mt-4 sm:mt-6 flex items-center hover:translate-x-2 transition-transform duration-300">  
                            <div className="rounded-full bg-pink-100 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center  hover:bg-pink-200">
                                <img src={sci} alt="first scissors" className="w-5 h-5 sm:w-6 sm:h-6" style={{ filter: 'invert(41%) sepia(95%) saturate(749%) hue-rotate(303deg) brightness(97%) contrast(101%)' }} />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:translate-y-2 transition-transform duration-300 flex flex-col justify-between">
                        <div className="flex flex-col items-start">
                            <div className="mb-4 sm:mb-6 w-full flex justify-center">
                                <div className="border-0 border-white-200 p-0 flex items-center justify-center w-36 h-32 sm:w-44 sm:h-40 md:w-57 md:h-54 overflow-hidden">
                                    <img
                                        src={coloringimg}
                                        alt="Hair Coloring"
                                        className="w-full h-full rounded-2xl object-cover transition-transform duration-500 ease-in-out hover:translate-x-4"
                                    />
                                </div>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4 text-left">Hair Coloring</h3>
                            <p className="text-gray-600 text-sm sm:text-base md:text-lg text-left">From subtle highlights to bold transformations, our color specialists create stunning, vibrant results.</p>
                        </div>
                        <div className="mt-4 sm:mt-6 flex items-center hover:translate-x-2 transition-transform duration-300">
                            <div className="rounded-full bg-pink-100 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center  hover:bg-pink-200">
                                <img src={spray} alt="spray box" className="w-5 h-5 sm:w-6 sm:h-6" style={{ filter: 'invert(41%) sepia(95%) saturate(749%) hue-rotate(303deg) brightness(97%) contrast(101%)' }} />
                            </div>
                        </div>
                    </div>
                    {/* Hair Treatments */}
                    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:translate-y-2 transition-transform duration-300 flex flex-col justify-between">
                        <div className="flex flex-col items-start">
                            <div className="mb-4 sm:mb-6 w-full flex justify-center">
                                <div className="border-0 border-white-200 p-0 flex items-center justify-center w-36 h-32 sm:w-44 sm:h-40 md:w-57 md:h-54 overflow-hidden">
                                    <img src={treatmentImg} alt="Hair Treatments" className="w-full h-full rounded-2xl object-cover transition-transform duration-500 ease-in-out hover:translate-x-4" />
                                </div>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4 text-left">Hair Treatments</h3>
                            <p className="text-gray-600 text-sm sm:text-base md:text-lg text-left">Nourishing treatments to repair, strengthen, and revitalize damaged hair for healthier locks.</p>
                        </div>
                        <div className="mt-4 sm:mt-6 flex items-center hover:translate-x-2 transition-transform duration-300">
                            <div className="rounded-full bg-pink-100 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-pink-200 ">
                                <img src={bubbles} alt="bubble can" className="w-5 h-5 sm:w-6 sm:h-6" style={{ filter: 'invert(41%) sepia(95%) saturate(749%) hue-rotate(303deg) brightness(97%) contrast(101%)' }} />
                            </div>
                        </div>
                    </div>
                    {/* Beard Grooming */}
                    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:translate-y-2 transition-transform duration-300 flex flex-col justify-between">
                        <div className="flex flex-col items-start">
                            <div className="mb-4 sm:mb-6 w-full flex justify-center">
                                <div className="border-0 border-white-200 p-0 flex items-center justify-center w-36 h-32 sm:w-44 sm:h-40 md:w-57 md:h-54 overflow-hidden">
                                    <img src={beardImg} alt="Beard Grooming" className="w-full h-full rounded-2xl object-cover transition-transform duration-500 ease-in-out hover:translate-x-4" />
                                </div>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4 text-left">Beard Grooming</h3>
                            <p className="text-gray-600 text-sm sm:text-base md:text-lg text-left">Expert beard trimming and shaping services to keep your facial hair looking sharp and well-maintained.</p>
                        </div>
                        <div className="mt-4 sm:mt-6 flex items-center hover:translate-x-2 transition-transform duration-300">
                            <div className="rounded-full bg-pink-100 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-pink-200">
                                <img src={scissors} alt="scissors" className="w-5 h-5 sm:w-6 sm:h-6" style={{ filter: 'invert(41%) sepia(95%) saturate(749%) hue-rotate(303deg) brightness(97%) contrast(101%)' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className='text-center mt-8 sm:mt-10 text-gray-700 text-base sm:text-lg'>Need a specific service not listed here? Contact us for custom pricing.</h1>
                <div className="flex justify-center">
                    <a
                        href="/contact"
                        className='px-5 sm:px-7 py-2 sm:py-3 bg-pink-600 rounded-full text-white hover:bg-pink-700 transition duration-300 text-base sm:text-lg font-semibold flex items-center gap-2 mt-2 sm:mt-8'>
                        Get in touch
                    </a>
                </div>
            </div>
        </div>
    );
};