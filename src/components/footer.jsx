import image from '../assets/facebook.png';
import images from '../assets/twitter.png';
import img from '../assets/instagram.png';
import imagee from '../assets/phone.png';
import imag from '../assets/map-pin-house.png';
import imagess from '../assets/mail.png';

export default function Footer() {
    return (
        <>
            <footer className="bg-[#1f2937] text-white pt-12 pb-8 mt-40">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-12">
                        <div className="mb-6 md:mb-0">
                            <h4 className="font-bold text-xl mb-4 text-pink-600">
                                CHIC<span className='text-gray-400'>CUTS</span>
                            </h4>
                            <p className='text-gray-400 text-base leading-relaxed max-w-xs'>
                                Providing premium hair styling services for all genders. Our team of expert stylists is dedicated to helping you look and feel your best.
                            </p>
                        </div>

                        <div className='mb-6 md:mb-0'>
                            <h4 className="font-bold text-xl mb-4 text-pink-600">Follow Us</h4>
                            <div className="flex flex-col space-y-4">
                                <div className="flex space-x-4">
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
                                        <img src={img} alt="Instagram" className="w-5 h-5 hover:scale-110 transition-transform filter invert" />
                                    </a>
                                    <span className='border border-left-10'></span>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
                                        <img src={image} alt="Facebook" className="w-5 h-5 hover:scale-110 transition-transform filter invert" />
                                    </a>
                                    <span className='border border-left-10'></span>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
                                        <img src={images} alt="Twitter" className="w-5 h-5 hover:scale-110 transition-transform filter invert"

                                        />

                                    </a>

                                </div>
                                <p className='text-gray-400 text-base'>@ChicCutsSalon</p>
                            </div>
                        </div>

                        <div className='mb-6 md:mb-0'>
                            <h4 className="font-bold text-xl mb-4 text-pink-600">Contact Info</h4>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <img
                                        src={imag}
                                        alt="Location"
                                        className="w-5 h-5 mt-1 mr-3 flex-shrink-0"
                                        style={{ filter: 'invert(41%) sepia(98%) saturate(749%) hue-rotate(303deg) brightness(97%) contrast(101%)' }}
                                    />
                                    <span className='text-gray-400 text-base'>
                                        123 Main St, City, State, ZIP
                                    </span>
                                </div>
                                <div className='flex items-center'>
                                    <img
                                        src={imagess}
                                        alt="Email"
                                        className="w-5 h-5 mr-3 flex-shrink-0"
                                        style={{ filter: 'invert(41%) sepia(98%) saturate(749%) hue-rotate(303deg) brightness(97%) contrast(101%)' }}
                                    />
                                    <span className='text-gray-400 text-base break-all'>
                                        chiccuts@gmail.com
                                    </span>
                                </div>
                                <div className='flex items-center'>
                                    <img
                                        src={imagee}
                                        alt="Phone"
                                        className="w-5 h-5 mr-3 flex-shrink-0"
                                        style={{ filter: 'invert(41%) sepia(98%) saturate(749%) hue-rotate(303deg) brightness(97%) contrast(101%)' }}
                                    />
                                    <span className='text-gray-400 text-base'>
                                        (123) 456-7890
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-xl mb-4 text-pink-600">Quick Links</h4>
                            <ol className="grid grid-cols-2 gap-x-8 gap-y-3">
                                <li><a href="/" className='text-gray-400 hover:text-pink-600 transition-colors text-base'>Home</a></li>
                                <li><a href="/premium" className='text-gray-400 hover:text-pink-600 transition-colors text-base'>Services</a></li>
                                <li><a href="/pricing" className='text-gray-400 hover:text-pink-600 transition-colors text-base'>Pricing</a></li>
                                <li><a href="/contact" className='text-gray-400 hover:text-pink-600 transition-colors text-base'>Contact</a></li>
                                <li><a href="/Team" className='text-gray-400 hover:text-pink-600 transition-colors text-base'>Team</a></li>
                                <li><a href="/Gallery" className='text-gray-400 hover:text-pink-600 transition-colors text-base'>Gallery</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Copyright Section */}
            <div className="border-t border-gray-700 bg-[#1f2937] text-center py-4">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
                    <span className="text-gray-400 text-sm md:text-base">
                        © 2025 ChicCuts. All rights reserved.
                    </span>
                </div>
            </div>
        </>
    )
}