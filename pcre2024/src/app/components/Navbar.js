// Navbar.js
"use client";

import { useState } from "react";
import { useNavbar } from './NavbarContext';

const Navbar = () => {
    const [navActive, setNavActive] = useState(false);
    const { navItems } = useNavbar();

    const conditionalClasses = navActive ? 'translate-y-6' : '';
    const additionalConditionalClasses = navActive ? 'translate-x-0 w-12' : '';
    const additionalAdditionalConditionalClasses = navActive ? 'rotate-45' : '';
    const additionalAdditionalAdditionalConditionalClasses = navActive ? '-rotate-45' : '';
    const conditionalAnimation = navActive ? '!translate-x-0' : '';
    const overlayStyles = navActive ? 'md:block h-full opacity-50' : 'opacity-0 h-0';

    const toggleConditionalClasses = () => {
        setNavActive(!navActive);
    };

    return (
        <>
            <div className="w-full h-28 flex items-center p-4 fixed z-50">
                <div className="font-semibold text-2xl grow z-10 text-white">
                    <div className="flex flex-col bg-[#022851] w-fit p-2">
                        <span className="text-center">PCRE</span>
                        <span className="text-center">2024</span>
                    </div>
                </div>
                <div className="z-10 flex items-center">
                    <button className="relative group" onClick={toggleConditionalClasses}>
                        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                                <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${conditionalClasses} delay-100`}></div>
                                <div className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${conditionalClasses} delay-75`}></div>
                                <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${conditionalClasses}`}></div>

                                <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0 ${additionalConditionalClasses}`}>
                                    <div className={`absolute bg-black md:bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${additionalAdditionalConditionalClasses}`}></div>
                                    <div className={`absolute bg-black md:bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${additionalAdditionalAdditionalConditionalClasses}`}></div>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
                <div className="w-full h-full absolute left-0 bg-gradient-to-b from-black to-transparent opacity-50"></div>
            </div>
            <div className={`flex flex-col items-center justify-center w-full md:w-[40%] xl:w-[20%] h-screen bg-white fixed z-[49] -translate-x-full transition-all duration-500 ${conditionalAnimation}`}>
                <div className="text-3xl flex flex-col gap-4 text-black">
                    {navItems.map((item, index) => (
                        <a className="hover:underline" key={index} href={item.href}>{item.label}</a>
                    ))}
                </div>
            </div>
            <div className={`w-full overflow-hidden bg-black fixed z-[48] transition-opacity duration-500 ${overlayStyles}`} onClick={() => toggleConditionalClasses()}></div>
        </>
    );
};

export default Navbar;
