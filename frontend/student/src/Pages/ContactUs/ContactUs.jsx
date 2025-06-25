import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../Context/StoreContext';
const ContactUs = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const {contactUsInfo, setContactUsInfo} = useContext(StoreContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setContactUsInfo({
            name,
            email,
            message,
        });
        
    }
    
    return (
        <div className="flex flex-col md:flex-row w-full min-h-screen bg-white">
            {/* Left Section - Contact Form */}
            <div className="flex-1 p-10">
                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your Name"
                            onChange={(e)=>setName(e.target.value)}
                            className="w-full border-b border-gray-400 py-2 outline-none focus:border-black"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            onChange={(e)=>setEmail(e.target.value)}
                            className="w-full border-b border-gray-400 py-2 outline-none focus:border-black"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Message</label>
                        <textarea
                            rows="4"
                            placeholder='Enter message'
                            onChange={(e)=>setMessage(e.target.value)}
                            className="w-full border-b border-gray-400 py-2 outline-none focus:border-black"
                        ></textarea>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="terms" className="w-4 h-4" />
                        <label htmlFor="terms" className="text-gray-700">
                            I accept the <span className="text-blue-600">Terms of Service</span>
                        </label>
                    </div>
                    <button
                        type="submit"
                        onClick={(e)=> handleSubmit(e)}
                        className="w-full bg-yellow-500 text-black font-bold py-3 rounded shadow-md hover:bg-yellow-600 transition"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>

            {/* Right Section - Contact Info */}
            <div className="flex-1 bg-gray-900 text-white p-10 flex flex-row justify-center">
                <div className="w-1/2 h-fit border-2 mt-11 text-center border-yellow-400 p-4 relative mr-5">
                    <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 px-4 text-white font-bold">TNP</h2>
                    <div className="mb-6">
                        <h3 className="text-yellow-400 font-bold text-lg">CALL US</h3>
                        <p>+91-01744-233303</p>
                        <p>+91-01744-233305</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-yellow-400 font-bold text-lg">LOCATION</h3>
                        <p><a href="https://www.google.com/maps/dir/nitkkr/">National Institute of Technology</a></p>
                        <p><a href="https://www.google.com/maps/dir/nitkkr/">Kurukshetra-136119, Haryana</a></p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-yellow-400 font-bold text-lg">Email</h3>
                        <p><a href="https://mail.google.com/mail/?view=cm&to=tnp@nitkkr.ac.in">tnp@nitkkr.ac.in</a></p>
                        <p><a href="https://mail.google.com/mail/?view=cm&to=tpo@nitkkr.ac.in">tpo@nitkkr.ac.in</a></p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-yellow-400 font-bold text-lg">Find Us Online</h3>
                        <div className='flex gap-6 p-3 justify-center'>
                            <p><a href="https://nitkkr.ac.in"><img className='w-9 transition-transform duration-300 hover:scale-110' src="images/website.png" alt="website" /></a></p>
                            <a href="https://www.linkedin.com/company/training-and-placement-cell-nit-kurukshetra/posts/?feedView=all"><img className='w-10 transition-transform duration-300 hover:scale-110' src="images/linkedin.png" alt="linkedin" /></a>
                        </div>
                    </div>
                </div>

                <div className='w-1/2 h-fit text-center border-2 mt-11 border-yellow-400 p-4 pb-12 pt-12 relative'>
                    <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 px-4 text-white font-bold">Developers</h2>
                    <div className="mb-6">
                        <h3 className="text-yellow-400 font-bold text-lg">Sameer Khobra</h3>
                        <div className='flex gap-6 p-3 justify-center'>
                            <p><a href="https://mail.google.com/mail/?view=cm&to=sameerkhobra474@gmail.com" target='_blank'><img className='w-10 transition-transform duration-300 hover:scale-110' src="images/gmail.png" alt="gmail" /></a></p>
                            <p><a href="http://github.com/sameerkhobra" target='_blank'><img className='w-10 transition-transform duration-300 hover:scale-110' src="images/github.png" alt="github" /></a></p>
                            <p><a href="https://www.linkedin.com/in/sameer-singh-49344227"><img className='w-10 transition-transform duration-300 hover:scale-110' src="images/linkedin.png" alt="linkedin" /></a></p>
                            <p><a href=""><img className='w-10 transition-transform duration-300 hover:scale-110' src="images/instagram.png" alt="Instagram" /></a></p>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-yellow-400 font-bold text-lg">Harshit Anand</h3>
                        <div className='flex gap-6 p-3 justify-center'>
                            <p><a href="https://mail.google.com/mail/?view=cm&to=harshitanand893@gmail.com" target='_blank'><img className='w-10 transition-transform duration-300 hover:scale-110' src="images/gmail.png" alt="gmail" /></a></p>
                            <p><a href="https://github.com/unblemished08"><img className='w-10 transition-transform duration-300 hover:scale-110' src="images/github.png" alt="github" /></a></p>
                            <p><a href="https://www.linkedin.com/in/harshit-anand-698499263"><img className='w-10 transition-transform duration-300 hover:scale-110' src="images/linkedin.png" alt="linkedin" /></a></p>
                            <p><a href="https://www.instagram.com/.unblemished._?igsh=dnlqc3p2cnM2aDA2"><img className='w-10 transition-transform duration-300 hover:scale-110' src="images/instagram.png" alt="Instagram" /></a></p>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-yellow-400 font-bold text-lg">Sameer Meel</h3>
                        <div className='flex gap-6 p-3 justify-center'>
                            <p><a href="https://mail.google.com/mail/?view=cm&to=sameermeel01@gmail.com" target='_blank'><img className='w-10 transition-transform duration-300 hover:scale-110' src="images/gmail.png" alt="gmail" /></a></p>
                            <p><a href="https://github.com/Samimeel"><img className='w-10 transition-transform duration-300 hover:scale-110' src="images/github.png" alt="github" /></a></p>
                            <p><a href="https://www.linkedin.com/in/sameer-meel-0354a0271"><img className='w-10 transition-transform duration-300 hover:scale-110' src="images/linkedin.png" alt="linkedin" /></a></p>
                            <p><a href="https://www.instagram.com/sameer_meel?igsh=MTlqeHZseDI2MzExcw=="><img className='w-10 transition-transform duration-300 hover:scale-110' src="images/instagram.png" alt="Instagram" /></a></p>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-yellow-400 font-bold text-lg">Richa</h3>
                        <div className='flex gap-6 p-3 justify-center'>
                            <p><a href="https://mail.google.com/mail/?view=cm&to=richieerichaa@gmail.com" target='_blank'><img className='w-10 transition-transform duration-300 hover:scale-110' src="images/gmail.png" alt="gmail" /></a></p>
                            <p><a href="https://github.com/Richa004"><img className='w-10 transition-transform duration-300 hover:scale-110' src="images/github.png" alt="github" /></a></p>
                            <p><a href="https://www.linkedin.com/in/richa-yadav-15867b25a"><img className='w-10 transition-transform duration-300 hover:scale-110' src="images/linkedin.png" alt="linkedin" /></a></p>
                            <p><a href="https://www.instagram.com/peace_full004?utm_source=qr&igsh=cGJ4ZXJvemd6MGlt"><img className='w-10 transition-transform duration-300 hover:scale-110' src="images/instagram.png" alt="Instagram" /></a></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ContactUs
