import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm p-5'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="Listaria Logo" />
            <p className='w-full md:w-2/3 text-gray-600'>
              At Listaria, we believe in the power of community. Our platform connects everyday people to buy and sell their belongings effortlessly. Whether you're decluttering or finding hidden treasures, we're here to help every step of the way!
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>📞 +91 76410 27963</li>
                <li>📧 listariaofficial@gmail.com</li>
            </ul>
        </div>

      </div>

      <div>
          <hr />
          <p className='py-5 text-sm text-center text-gray-500'>
            Join our community today and discover a world of possibilities! 
            <br />
            Copyright &copy; 2024 Listaria - All Rights Reserved.
          </p>
      </div>

    </div>
  );
};

export default Footer;
