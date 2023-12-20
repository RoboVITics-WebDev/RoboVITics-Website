import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'


const ContactUs = () => {

    const form = useRef();
    const [text,setText] = useState("Send ✉")
    const [isDisabled,setDisabled] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault(); 
        setText("Sending...");
        emailjs.sendForm('service_0ajikk8', 'template_k5zsu4i', form.current, 'Tnh3aPeueEt-ErVPY')
            .then((result) => {
                console.log(result.text);
                setText("Sent 🕊️")
                setDisabled(true);
            }, (error) => {
                setText("Unable to Send")
            });
    };
        

  return (
    <div className='flex justify-center h-screen items-center bg-gradient-to-r from-gray-400 to-neutral-700'>
          <div className="flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section"
        id="contact-form">
        <div className="md:w-1/3 w-full">
            <h1 className="text-4xl text-white sm:text-4xl font-bold title-font mb-4">Contact Us</h1>

            <div className="leading-relaxed text-xl text-gray-900 mt-8">
              <h2>Email : robovitics@vit.ac.in</h2>
              <br></br>
              <br></br>
              <h2>Akhil Mahesh</h2>
              <h4 className='text-xs'>Gen Sec Robovitcs</h4>
            </div>
            <span className="inline-flex mt-6 justify-center sm:justify-start">
             
               
            </span>
        </div>
        <div className="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
            <h1 className="text-4xl text-white sm:text-4xl font-bold title-font mb-4">Contact Form</h1>
            <form id="submit-contact-form" ref={form} onSubmit={sendEmail}>
            <input type="hidden" name="_token" value="gsNoqUqRqVXpkNBTI4Rtx43ay5dDHvdjeLeJLNrX"/>
                <div className="p-2 w-full">
                    <div className="relative">
                        <label className="leading-7 py-4 text-lg text-gray-900">Name</label>
                        <input type="text" id="name" name="from_name" required 
                            className="w-full rounded-md bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "/>
                    </div>
                </div>
                <div className="p-2 w-full">
                    <div className="relative">
                        <label className="leading-7 py-4 text-lg text-gray-900">Email</label>
                        <input type="email" id="email" name="from_email"  required className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out " />
                    </div>
                </div>
                <div className="p-2 w-full">
                    <div className="relative">
                        <label className="leading-7 py-4 text-lg text-gray-900">Message</label>
                        <textarea id="message" name="message" required
                            className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "></textarea>
                    </div>
                </div>
                <div className="p-2 w-full">
                <input type="hidden" value="" name="url"/>
                    <button type="submit" value="Send" disabled={isDisabled}
                        className="flex text-white bg-gray-900 border-0 py-4 px-6 focus:outline-none hover:bg-gray-700  rounded-xl text-xl font-bold shadow-lg mx-0 flex-col text-center g-recaptcha">
                        {text}
                    </button>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default ContactUs
