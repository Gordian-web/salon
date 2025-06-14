import img from '../assets/gallery.png';
import image from '../assets/cutgall.png';
import images from '../assets/girlgall.png';
import imag from '../assets/firstgall.png';
import picture from '../assets/clip.png';
import pic from '../assets/facial.png';
import React, { useEffect, useState } from 'react';
export default function Gallery() {
    const [Gallery, setgallery] = useState (false)
    React.useEffect(() =>{
        setTimeout(() => setgallery(true), 100)
    }, [])

    return (
        <div className={`text-center my-10 px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 transition-transform duration-1000 ease-out ${Gallery ? "transition-y-0 opacity-100" : "-transition-y-10 opacity-0"}`}>
            <div className="max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-14">
                <h1 className="text-3xl sm:text-4xl md:text-3xl  md:mt-10 font-bold mb-4 sm:mb-6 text-gray-800 ">
                    Our Work Gallery
                </h1>
                <p className="text-gray-600 text-lg sm:text-xl md:text-xl mx-auto">
                    Browse through our portfolio showcasing transformations and styles created by our talented team of stylists.
                </p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {[img, image, images, imag, picture, pic].map((src, idx) => (
                    <div 
                        key={idx} 
                        className="group overflow-hidden rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                    >
                        <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                            <img
                                src={src}
                                alt={`Gallery image ${idx + 1}`}
                                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                        <div className="relative inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        
                            <a className=" cursor-pointer text-white text-sm sm:text-base font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                                href=''
                            >
                                View Details
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Section */}
            <div className="max-w-2xl mx-auto mt-12 sm:mt-14 md:mt-16 px-4 sm:px-6">
                <p className="text-gray-600 text-lg sm:text-xl mb-6 sm:mb-8">
                    Need a specific service not shown here? Contact us for custom pricing.
                </p>
                <a 
                    href="/Appointment" 
                    className="inline-block bg-[#db2777] hover:bg-[#be185d] text-white font-semibold px-5   sm:px-10 py-4 sm:py-4 rounded-full transition-colors duration-300 text-lg shadow-md hover:shadow-lg"
                >
                    Book Your Transformation Now
                </a>
            </div>
        </div>
    );
}