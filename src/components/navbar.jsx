import React, { useState, useEffect } from "react";
import image from "../assets/phone.png";
import menuIcon from "../assets/icons8-menu copy.svg";
import closeIcon from "../assets/icons8-x copy.svg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const ToggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        setTimeout(() => setShowNav(true), 100);
    }, []);

    return (
        
        <nav className={`bg-white fixed top-0 w-full z-50 transition-transform duration-1000 ease-out border-b border-gray-400 ${
            showNav ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <div className="flex-shrink-0">
                        <h2 className="text-gray-600 text-xl md:text-2xl font-bold">
                            <span className="text-[#db2777]">CHIC</span>CUTS
                        </h2>
                    </div>

                    {/* Desktop/Tablet Navigation - shows on iPad (768px+) and larger */}
                    <div className="hidden md:flex md:items-center">
                        <div className={`flex items-center space-x-4 lg:space-x-10 xl:space-x-10 ${showNav ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
                            <NavLink href="/" text="Home" />
                            <NavLink href="/premium" text="Services" />
                            <NavLink href="/Gallery" text="Gallery" />
                            <NavLink href="/Team" text="Team" />
                            <NavLink href="/Pricing" text="Pricing" />
                            <NavLink href="/contact" text="Contact" />
                        </div>
                        <div className="ml-4">
                            <a 
                                href="/contact"
                                className="flex items-center gap-2 px-4 py-2 bg-[#db2777] text-white rounded-md hover:bg-[#be185d] transition-colors duration-200"
                            >
                                <img 
                                    src={image} 
                                    alt="phone" 
                                    className="w-4 h-4 lg:w-5 lg:h-5 invert" 
                                    loading="lazy" 
                                    srcSet={`${image} 1x, ${image} 2x`} 
                                />
                                <span>Book Now</span>
                            </a>
                        </div>
                    </div>
                    {/* Hamburger menu button for mobile */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={ToggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 focus:outline-none"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            {isOpen ? (
                                <img
                                    src={closeIcon}
                                    width={24}
                                    height={24}
                                    alt="Close menu"
                                />
                            ) : (
                                <img
                                    src={menuIcon}
                                    width={24}
                                    height={24}
                                    alt="Open menu"
                                />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Navigation Drawer */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-transform duration-1000 ease-out  ${showNav ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
                <div className="px-4 pt-2 pb-6 space-y-2 bg-white shadow-lg transition-transform duration-1000 ease-out">
                    <MobileNavLink href="/" text="Home" />
                    <MobileNavLink href="/premium" text="Services" />
                    <MobileNavLink href="/Gallery" text="Gallery" />
                    <MobileNavLink href="/Team" text="Team" />
                    <MobileNavLink href="/Pricing" text="Pricing" />
                    <MobileNavLink href="/contact" text="Contact" />
                    <a
                        href="/contact"
                        className="flex items-center gap-2 px-4 py-2 bg-[#db2777] text-white rounded-md hover:bg-[#be185d] transition-colors duration-200 mt-2"
                    >
                        <img
                            src={image}
                            alt="phone"
                            className="w-5 h-5 invert"
                            loading="lazy"
                            srcSet={`${image} 1x, ${image} 2x`}
                        />
                        <span>Book Now</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

// Reusable NavLink component for desktop/tablet
const NavLink = ({ href, text }) => (
    <a
        href={href}
        className="text-gray-600 hover:text-[#db2777] px-2 py-1.5 lg:px-3 lg:py-2 rounded-md text-base lg:text-lg font-medium transition-colors duration-200"
    >
        {text}
    </a>
);

// Reusable MobileNavLink component
const MobileNavLink = ({ href, text }) => (
    <a
        href={href}
        className="text-gray-700 hover:text-[#db2777] hover:bg-gray-50 block px-4 py-3 rounded-md text-lg font-medium transition-colors"
    >
        {text}
    </a>
);


export default Navbar;