
import React, { useState,  useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Appointment = () => {
        const [Appointment, setShowapp] = useState(false);
            useEffect(() => {
                setTimeout(() => setShowapp(true), 500);
            }, []);
        

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        firstTime: '',
        appointmentDate: '',
        service: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState('');

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_ID;

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted('Submitting...');

        const templateparams = {
            name: `${formData.firstName} ${formData.lastName}`,
            phone: formData.phone,
            email: formData.email,
            firstTime: formData.firstTime,
            appointmentDate: formData.appointmentDate,
            service: formData.service,
            message: formData.message
        };
        try {
            const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateparams, PUBLIC_KEY);
            if (response.status === 200) {
                setIsSubmitted('Appointment request sent successfully!');
                alert('Thank you for your request! We will get back to you soon.');
                // Reset form data
                setFormData({
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    firstTime: '',
                    appointmentDate: '',
                    service: '',
                    message: ''
                });
            } else {
                setIsSubmitted('Failed to send appointment request. Please try again.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setIsSubmitted('An error occurred while sending your request. Please try again later.');
        }
    };

    return (
        <>
            <div className={`px-4 sm:px-6 lg:px-8 transition-transform duration-1000 ease-out ${Appointment ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
                <div className="mt-20 mb-8 sm:mt-32 sm:mb-12">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-center mb-3 sm:mb-4">
                        Book Appointment
                    </h1>
                    <p className="text-center mb-4 sm:mb-6 text-gray-600 text-base sm:text-lg">
                        Ready for a new look? Book your appointment today and let our expert stylists transform your
                        <br className="hidden sm:block" /> hair.
                    </p>
                </div>

                <form className="flex flex-col gap-4 max-w-lg sm:max-w-2xl mx-auto bg-white p-4 sm:p-6 rounded shadow mt-10 sm:mt-20 w-full " onSubmit={handleSubmit}>
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 text-pink-600">Request an Appointment</h2>
                    <label className="font-medium">
                        Name
                        <div className="flex flex-col sm:flex-row gap-2 mt-2">
                            <input
                                type="text"
                                required
                                placeholder="First name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 min-w-0"
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 min-w-0"
                            />
                        </div>
                    </label>
                    <input
                        type="tel"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        name="phone"
                        required
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        name="email"
                        required
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                    <div>
                        <h3 className="font-semibold mb-1">First time visit?</h3>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <label className="mr-4">
                                <input
                                    type="radio"
                                    name="firstTime"
                                    onChange={handleChange}
                                    value="yes"
                                    checked={formData.firstTime === "yes"}
                                    required
                                    className="mr-1 accent-pink-600"
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="firstTime"
                                    onChange={handleChange}
                                    value="no"
                                    checked={formData.firstTime === "no"}
                                    className="mr-1 accent-pink-600"
                                />
                                No
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <h3 className="font-bold mb-1">Select an appointment date</h3>
                            <input
                                type="date"
                                name="appointmentDate"
                                value={formData.appointmentDate}
                                onChange={handleChange}
                                required
                                className="flex border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 w-full"
                            />
                        </div>
                        <div className="flex-1 flex flex-col justify-end">
                            <label className="font-bold mb-1">Select a service</label>
                            <select
                                required
                                value={formData.service}
                                onChange={handleChange}
                                name="service"
                                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 w-full"
                            >
                                <option value="">Choose a service</option>
                                <option value="Haircut">Haircut</option>
                                <option value="Hair Coloring">Hair Coloring</option>
                                <option value="Styling">Styling</option>
                                <option value="Manicure">Manicure</option>
                                <option value="Pedicure">Pedicure</option>
                                <option value="Facial">Facial</option>
                                <option value="Waxing">Waxing</option>
                                <option value="Massage">Massage</option>
                            </select>
                        </div>
                    </div>
                    <textarea
                        placeholder="message..."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                    <button
                        type="submit"
                        className="bg-pink-600 text-white py-3 rounded font-semibold hover:bg-pink-700 transition"
                    >
                        Book Appointment
                    </button>
                    {isSubmitted && (
                        <div className="mt-2 text-center text-sm text-pink-600">{isSubmitted}</div>
                    )}
                </form>
            </div>
        </>
    );
};

export default Appointment;

