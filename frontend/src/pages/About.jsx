import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Welcome to Listaria, where our passion for innovation meets a commitment to transforming the online shopping experience. We understand that the way people shop is evolving, and we set out to create a platform that not only simplifies the buying and selling process but also builds trust and fosters community. Our journey began with a simple yet powerful idea: to provide a marketplace where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes, all while ensuring a safe and reliable environment.</p>
              <p>From the outset, our focus has been on curating a diverse selection of high-quality products that cater to the varied tastes and preferences of our users. Whether you're looking for the latest electronics, fashionable clothing, or cherished books, we have an extensive collection sourced from trusted brands and reputable suppliers. Each product listed on our platform is chosen with care, reflecting our commitment to quality and authenticity.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>At Listaria, our mission is clear: to empower our customers with choice, convenience, and confidence. We are dedicated to providing a seamless shopping experience that not only meets but exceeds expectations at every touchpoint. From the moment you browse our listings to the instant you receive your order, we strive to make each interaction smooth and enjoyable. Our aim is to foster a marketplace where buyers and sellers can connect easily, ensuring that every transaction is straightforward and satisfying.As we grow, we envision integrating advanced technologies to further enhance our platform. While our current focus is on delivering an exceptional user experience, we have exciting plans for the future, including the introduction of AI-driven features. These innovations will improve product verification processes and provide personalized recommendations, making shopping even more intuitive and tailored to your needs.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Wide Selection of Products:</b>
            <p className=' text-gray-600'>At Listaria, we offer a vast array of products across various categories, ensuring that you can find what you need, whether it’s electronics, fashion, home goods, or books. Our platform is designed to help you discover items that suit your lifestyle and preferences.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Ease of Use:</b>
            <p className=' text-gray-600'>Navigating our marketplace should be a breeze. That’s why we’ve designed Listaria with a user-friendly interface that makes browsing, purchasing, and selling as easy as possible. Our streamlined ordering process minimizes hassle, allowing you to find what you need quickly and effortlessly.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Support:</b>
            <p className=' text-gray-600'>Customer satisfaction is our top priority. Our dedicated support team is here to assist you at every step of your shopping journey. Whether you have questions about a product, need assistance with your order, or require guidance on the selling process, we are always ready to help. Your experience matters to us, and we are committed to ensuring that you feel valued and supported.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
