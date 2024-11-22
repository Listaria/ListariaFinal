import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  const openGmail = () => {
    window.location.href = 'mailto:listariaofficial@gmail.com?subject=Job Inquiry';
  };

  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="Contact Us" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='text-gray-500'>📞 Phone: +91 76410 27963 <br /> ✉️ Email: listariaofficial@gmail.com</p>
          
          <p className='font-semibold text-xl text-gray-600'>🚀 Want to Join Us</p>
          <p className='text-gray-500'>Excited about joining our team? Learn more about our fantastic job openings and the amazing people behind Listaria!</p>
          
          <button 
            onClick={openGmail} 
            className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Let's Connect
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
