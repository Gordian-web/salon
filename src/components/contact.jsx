import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import img from '../assets/phone.png';
import images from '../assets/map-pin-house.png';
import image from '../assets/mail.png';
import image1 from '../assets/clock-8.png';
import image2 from '../assets/circle-fading-plus.png';

const Contact = () => {
    const [contact, setcontact] = useState(false)
    useEffect(() => {
        setTimeout(() => setcontact(true), 100)
    },[]);
    
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_ID;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        
        const templateparams = {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
        };
        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateparams, PUBLIC_KEY);
            setStatus('Message sent successfully!');
            alert('Message sent successfully!');
            setForm({
                name: '',
                email: '',
                message: '',
            });
        } catch (err) {
            console.error(err);
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <div className={`flex flex-col items-center min-h-screen transition-transform duration-1000 ease-out  bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 mt-15 md:mt-15 ${ contact ?"translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
            <div className="w-full max-w-7xl text-center mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-3xl font-bold text-gray-800 font-sans mb-3 sm:mb-4">
                    Contact Us
                </h2>
                <p className="text-gray-600 text-lg sm:text-xl md:text-xl max-w-3xl mx-auto">
                    You can reach us by phone, email, by our location, or visit us on our social media handles.
                </p>
            </div>
                {/* fo9rm and map setion */}
            <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 md:gap-10">
                <div className="w-full lg:w-1/2 bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800 font-sans">
                            Send Us a Message
                        </h2>
                        <div className="space-y-5">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-base md:text-lg"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-base md:text-lg"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={form.message}
                                onChange={handleChange}
                                rows={5}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none text-base md:text-lg"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-lg"
                            >
                                Send Message
                            </button>
                            {status && (
                                <p className={`text-center mt-3 text-sm md:text-base ${
                                    status.includes('success') ? 'text-green-600' : 'text-red-600'
                                }`}>
                                    {status}
                                </p>
                            )}
                        </div>
                    </form>
                </div>

                {/* Map and Quick Info */}
                <div className="w-full lg:w-1/2 bg-pink-50 p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800 font-sans">
                        Visit Us
                    </h3>
                    <div className="h-64 sm:h-72 md:h-80 lg:h-96 w-full rounded-lg overflow-hidden shadow-md mb-6">
                        <iframe
                            title="Salon Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353159046!3d-37.8162797420217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f8e7b1%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="border-0"
                        ></iframe>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <img
                                src={images}
                                alt="Location"
                                className="w-7 h-7 mr-3"
                                style={{ filter: 'invert(41%) sepia(98%) saturate(749%) hue-rotate(303deg) brightness(97%) contrast(101%)' }}
                            />
                            <p className="text-gray-700 text-base md:text-lg">123 Main St, City, State, ZIP</p>
                        </div>
                        <div className="flex items-center">
                            <img
                                src={img}
                                alt="Phone"
                                className="w-7 h-7 mr-3"
                                style={{ filter: 'invert(41%) sepia(98%) saturate(749%) hue-rotate(303deg) brightness(97%) contrast(101%)' }}
                            />
                            <p className="text-gray-700 text-base md:text-lg">(234) 8140-355-189</p>
                        </div>
                        <div className="flex items-center">
                            <img
                                src={image}
                                alt="Email"
                                className="w-7 h-7 mr-3"
                                style={{ filter: 'invert(41%) sepia(98%) saturate(749%) hue-rotate(303deg) brightness(97%) contrast(101%)' }}
                            />
                            <p className="text-gray-700 text-base md:text-lg break-all">chiccuts@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" max-w-7xl bg-white p-6 sm:p-8 md:p-10  md:ml-10 rounded-xl shadow-lg mt-8 sm:mt-10 md:mt-12">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8  md:gap-10">
                    <div>
                        <div className="flex items-center mb-4">
                            <img
                                src={image1}
                                alt="Hours"
                                className="w-7 h-7 mr-3"
                                style={{ filter: 'invert(41%) sepia(98%) saturate(749%) hue-rotate(303deg) brightness(97%) contrast(101%)' }}
                            />
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Business Hours</h3>
                        </div>
                        <div className="space-y-2 ml-10">
                            <p className="text-gray-700 text-base md:text-lg">Monday - Friday: 9:00 AM - 8:00 PM</p>
                            <p className="text-gray-700 text-base md:text-lg">Saturday: 10:00 AM - 6:00 PM</p>
                            <p className="text-gray-700 text-base md:text-lg">Sunday: Closed</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center mb-4">
                            <img
                                src={image2}
                                alt="Social Media"
                                className="w-7 h-7 mr-3"
                                style={{ filter: 'invert(41%) sepia(98%) saturate(749%) hue-rotate(303deg) brightness(97%) contrast(101%)' }}
                            />
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Social Media</h3>
                        </div>
                        <div className="space-y-2 ml-10">
                            <p className="text-gray-700 text-base md:text-lg break-all">Instagram: @salon</p>
                            <p className="text-gray-700 text-base md:text-lg break-all">Facebook: @salon</p>
                            <p className="text-gray-700 text-base md:text-lg break-all">Twitter: @salon</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;