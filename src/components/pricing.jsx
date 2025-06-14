import image from '../assets/check.png';
import React,  {useEffect,useState} from "react"
export default function Pricing() {
    const [pricing,setpricing] = useState(false)
    useEffect(() => {
        setTimeout(() => setpricing(true), 100)
    }, [])
    return (
        
        <div className={`min-h-screen md:mt-0 transition-transform duration-1000 ease-out ${pricing ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-10"}`}>
            <h1 className="text-3xl font-bold text-center mt-20 md:mt-30 my-8">Our Pricing
            </h1>
            < p className='text-center mb-5 text-gray-600' >We offer a range of services to meet your needs. All prices are starting points and may vary <br /> based on hair length, thickness, and specific requirements.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 sm:p-6 h-auto max-w-7xl mx-auto ">
                <div className="bg-[#f9fafb] shadow-lg p-4 rounded hover:scale-105 transition-transform duration-300">
                    <h2 className="text-xl font-semibold mb-2 mt-10">Basic haircuts</h2>
                    <p className="text-gray-700 mb-4">Classic haircut and simple styling
                    </p>
                    <p className="text-4xl font-bold mb-4 flex items-center gap-2">
                        $35 <span className="text-lg font-semibold">add up</span>
                    </p>
                    <p className='mb-4'>
                        <img src={image} alt="check" className="inline-block w-4 h-4 mr-2 text-green-500" style={{ filter: 'brightness(0) saturate(100%) invert(53%) sepia(92%) saturate(748%) hue-rotate(74deg) brightness(97%) contrast(101%)' }} />
                        Consultation
                    </p>
                    <p className='mb-4'>
                        <img src={image} alt="check" className="inline-block w-4 h-4 mr-2 text-green-500" style={{ filter: 'brightness(0) saturate(100%) invert(53%) sepia(92%) saturate(748%) hue-rotate(74deg) brightness(97%) contrast(101%)' }} />
                        Shampoo & Conditioning
                    </p>
                    <p className='mb-4'>
                        <img src={image} alt="check" className="inline-block w-4 h-4 mr-2 text-green-500" style={{ filter: 'brightness(0) saturate(100%) invert(53%) sepia(92%) saturate(748%) hue-rotate(74deg) brightness(97%) contrast(101%)' }} />
                        Precision Cut
                    </p>
                    <p className='mb-4'>
                        <img src={image} alt="check" className="inline-block w-4 h-4 mr-2 text-green-500" style={{ filter: 'brightness(0) saturate(100%) invert(53%) sepia(92%) saturate(748%) hue-rotate(74deg) brightness(97%) contrast(101%)' }} />
                        Basic Styling
                    </p>

                    <a
                        href="/contact"
                        className="bg-[#f3f4f6] mt-34 text-black px-10 sm:px-20 py-2 rounded hover:bg-pink-600 hover:text-white transition duration-300 w-full flex justify-center items-center "
                    >
                        Book Now
                    </a>
                </div>
                <div className="relative bg-[#f9fafb] shadow-lg p-4 rounded-lg border-3 border-pink-500 flex flex-col items-center hover:scale-105 transition-transform duration-300">
                    <button className="absolute right-0/5 top-0 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-l shadow">
                        popular
                    </button>
                    <h2 className="text-xl font-semibold mb-2 mt-8 mr-29">Premium Style</h2>
                    <p className="text-gray-700 mb-4">Complete styling with premium products</p>
                    <p className="text-4xl font-bold mb-4 flex items-center gap-2 mr-30">
                        $65 <span className="text-lg font-semibold">add up</span>
                    </p>
                    <div className="gap-2 text-gray-700 mb-8 mr-14 ">
                        <p>
                            <img src={image} alt="check" className="inline-block w-4 h-4 mr-2 mb-4 text-green-500" style={{ filter: 'brightness(0) saturate(100%) invert(53%) sepia(92%) saturate(748%) hue-rotate(74deg) brightness(97%) contrast(101%)' }} />
                            Detailed Consultation
                        </p>
                        <p>
                            <img src={image} alt="check" className="inline-block w-4 h-4 mr-2 mb-4 text-green-500" style={{ filter: 'brightness(0) saturate(100%) invert(53%) sepia(92%) saturate(748%) hue-rotate(74deg) brightness(97%) contrast(101%)' }} />
                            Premium   Conditioning
                        </p>
                        <p>
                            <img src={image} alt="check" className="inline-block w-4 h-4 mr-2 mb-4 text-green-500" style={{ filter: 'brightness(0) saturate(100%) invert(53%) sepia(92%) saturate(748%) hue-rotate(74deg) brightness(97%) contrast(101%)' }} />
                            Precision Cut
                        </p>
                        <p>
                            <img src={image} alt="check" className="inline-block w-4 h-4 mr-2 mb-4 text-green-500" style={{ filter: 'brightness(0) saturate(100%) invert(53%) sepia(92%) saturate(748%) hue-rotate(74deg) brightness(97%) contrast(101%)' }} />
                            Blow Dry & Styling
                        </p>
                        <p>
                            <img src={image} alt="check" className="inline-block w-4 h-4 mr-2 mb-4 text-green-500" style={{ filter: 'brightness(0) saturate(100%) invert(53%) sepia(92%) saturate(748%) hue-rotate(74deg) brightness(97%) contrast(101%)' }} />
                            Style Recommendations
                        </p>
                    </div>
                    <a
                        href="/Appointment"
                        className="bg-pink-600 mt-10 text-white px-10 sm:px-20 py-2 rounded hover:bg-pink-700 hover:text-white transition duration-300 w-full flex justify-center items-center"
                    >
                        Book Now
                    </a>
                </div>
                <div className="bg-[#f9fafb] shadow-lg  p-4 rounded hover:scale-105 transition-transform duration-300">
                    <h2 className="text-xl font-semibold mb-2 mt-10">Color Service</h2>
                    <p className="text-gray-700 mb-4">Full color or highlights with <br /> styling</p>
                    <p className="text-4xl font-bold mb-4 flex items-center gap-2">
                        $85 <span className="text-lg font-semibold">add up</span>
                    </p>
                    <p className='mb-4'>
                        <img src={image} alt="check" className="inline-block w-4 h-4 mr-2 text-green-500" style={{ filter: 'brightness(0) saturate(100%) invert(53%) sepia(92%) saturate(748%) hue-rotate(74deg) brightness(97%) contrast(101%)' }} />
                        Color Consultation
                    </p>
                    <p className='mb-4'>
                        <img src={image} alt="check" className="inline-block w-4 h-4 mr-2 text-green-500" style={{ filter: 'brightness(0) saturate(100%) invert(53%) sepia(92%) saturate(748%) hue-rotate(74deg) brightness(97%) contrast(101%)' }} />
                        Premium Color Products
                    </p>
                    <p className='mb-4'>
                        <img src={image} alt="check" className="inline-block w-4 h-4 mr-2 text-green-500" style={{ filter: 'brightness(0) saturate(100%) invert(53%) sepia(92%) saturate(748%) hue-rotate(74deg) brightness(97%) contrast(101%)' }} />
                        Application & Processing
                    </p>
                    <p className='mb-4'>
                        <img src={image} alt="check" className="inline-block w-4 h-4 mr-2 text-green-500" style={{ filter: 'brightness(0) saturate(100%) invert(53%) sepia(92%) saturate(748%) hue-rotate(74deg) brightness(97%) contrast(101%)' }} />
                        Shampoo & Conditioning
                    </p>
                    <p className='mb-4'>
                        <img src={image} alt="check" className="inline-block w-4 h-4 mr-2 text-green-500" style={{ filter: 'brightness(0) saturate(100%) invert(53%) sepia(92%) saturate(748%) hue-rotate(74deg) brightness(97%) contrast(101%)' }} />
                        Blow Dry & Styling
                    </p><br />
                    <a
                        href="/contact"
                        className="bg-[#f3f4f6]  mt-10 text-black px-10 sm:px-20 py-2 rounded hover:bg-pink-600 hover:text-white transition duration-300 w-full flex justify-center items-center">
                        Book Now
                    </a>
                </div>
                <div className="bg-[#f9fafb] shadow-lg p-4 rounded hover:scale-105 transition-transform duration-300">
                    <h2 className="text-xl font-semibold mb-2 mt-10">Deluxe Package</h2>
                    <p className="text-gray-700 mb-4">Complete hair transformation</p>
                    <p className="text-4xl font-bold mb-4 flex items-center gap-2">
                        $120 <span className="text-lg font-semibold">add up</span>
                    </p>
                    <p className='mb-4'>
                        <img src={image} alt="check" className="inline-block w-4 h-4 mr-2 text-green-500" style={{ filter: 'brightness(0) saturate(100%) invert(53%) sepia(92%) saturate(748%) hue-rotate(74deg) brightness(97%) contrast(101%)' }} />
                        Comprehensive Consultation
                    </p>
                    <p className='mb-4'>
                        <img src={image} alt="check" className="inline-block w-4 h-4 mr-2 text-green-500" style={{ filter: 'brightness(0) saturate(100%) invert(53%) sepia(92%) saturate(748%) hue-rotate(74deg) brightness(97%) contrast(101%)' }} />
                        Custom Color/Highlights
                    </p>
                    <p className='mb-4'>
                        <img src={image} alt="check" className="inline-block w-4 h-4 mr-2 text-green-500" style={{ filter: 'brightness(0) saturate(100%) invert(53%) sepia(92%) saturate(748%) hue-rotate(74deg) brightness(97%) contrast(101%)' }} />
                        Treatment Mask
                    </p>
                    <p className='mb-4'>
                        <img src={image} alt="check" className="inline-block w-4 h-4 mr-2 text-green-500" style={{ filter: 'brightness(0) saturate(100%) invert(53%) sepia(92%) saturate(748%) hue-rotate(74deg) brightness(97%) contrast(101%)' }} />
                        Precision Cut
                    </p>
                    <p className='mb-4'>
                        <img src={image} alt="check" className="inline-block w-4 h-4 mr-2 text-green-500" style={{ filter: 'brightness(0) saturate(100%) invert(53%) sepia(92%) saturate(748%) hue-rotate(74deg) brightness(97%) contrast(101%)' }} />
                        Premium Styling
                    </p>
                    <p className='mb-4'>
                        <img src={image} alt="check" className="inline-block w-4 h-4 mr-2 text-green-500" style={{ filter: 'brightness(0) saturate(100%) invert(53%) sepia(92%) saturate(748%) hue-rotate(74deg) brightness(97%) contrast(101%)' }} />
                        Product Recommendations
                    </p><br />

                    <a
                        href="/contact"
                        className="bg-[#f3f4f6] mt-5 text-black px-10 sm:px-20 py-2 rounded hover:bg-pink-600 hover:text-white transition duration-300 w-full flex justify-center items-center">
                        Book Now
                    </a>
                </div>
            </div>
            {/* <h1 className='text-center mt-8'>Need a specific service not listed here? Contact us for custom pricing.</h1>
            <div className="flex justify-center mt-4">
                <a
                    href="/contact"
                    className='px-7 py-3 bg-pink-600 rounded-lg text-white hover:bg-pink-700 transition duration-300 text-lg font-semibold flex items-center gap-2'>
                    Get in touch
                </a>
            </div> */}
        </div>
    );
}
