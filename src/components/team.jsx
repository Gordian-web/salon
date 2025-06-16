import facebook from '../assets/facebook.png';
import images from '../assets/twitter.png';
import img from '../assets/instagram.png';
import imag from '../assets/color specialist.png';
import picture from '../assets/creative director.png';
import pic from '../assets/snr stylist.png';
import pix from '../assets/stylist consultant.png';
import { useEffect, useState } from 'react';
export default function Team() {
    const [team, setteam] = useState (false)
    useEffect(() =>  {
        setTimeout(() => setteam(true), 100)
    }, []);
    return (
        <div className={`ax-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 mt-16 md:mt-10 transition-transform duration-1000 ease-out ${team ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="text-center mb-8 md:mb-12">
                <h1 className="text-2xl sm:text-2xl md:text-2xl font-bold mb-3 md:mb-4 text-black">Meet Our Expert Team</h1>
                <p className="text-gray-600 mx-auto text-base sm:text-lg  max-w-2xl">
                    Our talented stylists bring years of experience and passion to create the perfect look for every client.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                <TeamCard 
                    image={picture}
                    name="Alex Morgan"
                    role="Creative Director"
                    description="With 15 years of experience, Alex specializes in innovative cutting techniques and color transformations."
                />
                <TeamCard 
                    image={pic}
                    name="Jordan Taylor"
                    role="Senior Stylist"
                    description="Jordan is known for their precision cuts and personalized styling, ensuring every client leaves satisfied."
                />
                <TeamCard 
                    image={imag}
                    name="Sam Rivera"
                    role="Color Specialist"
                    description="Sam is known for creating stunning balayage, highlights, and color corrections that enhance natural beauty."
                />
                <TeamCard 
                    image={pix}
                    name="Jamie Chen"
                    role="Style Consultant"
                    description="Jamie has a talent for matching hairstyles to face shapes and personal style, ensuring every client leaves confident."
                />
            </div>
        </div>
    );
}
const TeamCard = ({ image, name, role, description }) => {
    return (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center h-full">
            <div className="w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 overflow-hidden rounded-2xl mb-4 md:mb-6">
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 ease-in-out hover:translate-x-4 object-top" 
                />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">{name}</h2>
            <p className="text-[#db2777] mb-3 md:mb-4 text-lg md:text-xl font-semibold">{role}</p>
            <p className="text-gray-600 text-sm md:text-base text-center mb-4 md:mb-6">
                {description}
            </p>
            <div className="flex gap-3 mt-auto">
                <SocialIcon href="https://facebook.com" icon={facebook} alt="Facebook" />
                <SocialIcon href="https://twitter.com" icon={images} alt="Twitter" />
                <SocialIcon href="https://instagram.com" icon={img} alt="Instagram" />
            </div>
        </div>
    );
};
const SocialIcon = ({ href, icon, alt }) => {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group w-8 h-8 md:w-9 md:h-9 flex items-center justify-center"
        >
            <img 
                src={icon} 
                alt={alt} 
                className="w-7 h-7 filter grayscale brightness-0 invert-[0.4] transition-all duration-200 group-hover:grayscale-0 group-hover:invert-0 group-hover:brightness-100" 
            />
        </a>
    );
};