import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
 import { toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [isBtnActive, setIsBtnActive] = useState(false);
  const form = useRef();
  const [mailData, setMailData] = React.useState({
    from_email: '',
    from_name: '',
    from_phone: '',
    message: '',
  });

 const handleChange = (e) => {
  setMailData({
    ...mailData,
    [e.target.name]: e.target.value,
  });
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsBtnActive(true);

    if (
      !mailData.from_name &&
      !mailData.message &&
      !mailData.from_email &&
      !mailData.from_phone
    ) {
      toast.error('Enter required fields');
      setIsBtnActive(false);
      return;
    }

    if (
      !mailData.from_name ||
      !/^[a-zA-Z\s]+$/.test(mailData.from_name.trim())
    ) {
      toast.error('Enter a valid name with letters only');
      setIsBtnActive(false);
      return;
    }

    // Check if either email or phone is provided
    if (!mailData.from_email && !mailData.from_phone) {
      toast.error('Provide either email or phone');
      setIsBtnActive(false);
      return;
    }

    if (
      mailData.from_phone &&
      !/^[6-9][0-9]{9}$/.test(mailData.from_phone.trim())
    ) {
      toast.error('Enter a valid 10-digit phone number');
      setIsBtnActive(false);
      return;
    }

    // Validate email format
    if (
      mailData.from_email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mailData.from_email)
    ) {
      toast.error('Enter a valid email address');
      setIsBtnActive(false);
      return;
    }

      emailjs.sendForm(process.env.serviceID, process.env.templateID, form.current, process.env.publicKey)
      .then((result) => {
      console.log(result);
      setMailData({
        from_name: '',
        from_email: '',
        from_phone: '',
        message: '',
      });
      form.current.reset();
      setIsBtnActive(false);
    }, (error) => {
      setIsBtnActive(false);
      console.log(error);
    });
  }

  return (
    <div
      id="contact"
      className="h-screen flex items-center justify-center w-full"
    >
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="w-full px-10 lg:w-2/6 md:w-2/4"
      >
        <div className="title my-10">
          <h2>Contact</h2>
        </div>
        <div className="border-b border-gray-900/10 pb-12 w-full md:px-0 m-auto">
          <div className="mt-10 flex flex-col gap-y-5 w-full">
            <div className="">
              <label
                htmlFor="from-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="from_name"
                  id="from_name"
                  placeholder="Enter your name"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => handleChange(e)}
                  value={mailData?.from_name}
                />
              </div>
            </div>

            <div className="">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="from_email"
                  id="from_email"
                  placeholder="Email address"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => handleChange(e)}
                  value={mailData?.from_email}
                />
              </div>
            </div>

            <div className="">
              <label
                htmlFor="from_phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone
              </label>
              <div className="mt-2">
                <input
                  id="from_phone"
                  name="from_phone"
                  type="number"
                  placeholder="Phone number"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => handleChange(e)}
                  value={mailData?.from_phone}
                />
              </div>
            </div>

            <div className="">
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2">
                <textarea
                  name="message"
                  id="message"
                  cols="10"
                  rows="10"
                  placeholder="Message"
                  className="px-2 h-24 resize-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => handleChange(e)}
                  value={mailData?.message}
                ></textarea>
              </div>
            </div>

            <div className="text-center mx-auto">
              <button
                type="submit"
                disabled={isBtnActive}
                className="flex flex-row items-center text-center gap-3 rounded-md align-center bg-indigo-700 px-4 py-3 text-sm font-semibold text-white border border-indigo-600 shadow-sm hover:bg-white hover:text-green-600 hover:border-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <p className="text-lg">{isBtnActive ? 'Sending' : 'Send'}</p>
                <img src="/paperplane.png" alt="" className="w-8" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
