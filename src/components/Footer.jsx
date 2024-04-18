"use client"
import { FaHeart } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                <div>
                    <h3 className="font-semibold text-lg">Music</h3>
                    <p className="text-lg"> C/ d'Arístides Maillol, 12, Les Corts, 08028 Barcelona, Spain</p>
                    <p className="text-lg">Phone: +1234567890</p>
                </div>
                <div className='text-lg'>
                    <p className="">© {new Date().getFullYear()} All rights reserved.</p>
                    <p className="">Designed with <FaHeart className="inline text-red-500" /> </p>
                </div>
                <div>
                    <img src="/logo.jpg" alt="Company Logo" className="h-8 w-auto rounded-full" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
