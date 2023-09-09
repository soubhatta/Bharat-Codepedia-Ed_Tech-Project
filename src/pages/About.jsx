import React from 'react'
import HighlightText from '../Components/core/HomePage/HighlightText';
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Quote from "../Components/core/AboutPage/Quote"
import FoundingStory from "../assets/Images/FoundingStory.png"
import StatsComponent from '../Components/core/AboutPage/Stats'
import LearningGrid from '../Components/core/AboutPage/LearningGrid'
import ContactFormSection from '../Components/core/AboutPage/ContactFormSection'
import Footer from '../Components/common/Footer'
import RatingSlider from '../Components/core/Ratings/RatingSlider';

const About = () => {
  return (
    <div className='mx-auto text-white'>
      {/* section 1 */}
      <section className='bg-richblue-500'>
        <div className='relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white'>
          <header className='mx-auto py-20 text-4xl font-semibold lg:w-[70%]'>
            Transforming Online Education for a 
            <HighlightText text={" Brighter Tomorrow"} />
            <p className='mx-auto mt-3 text-center text-base font-medium text-richwhite-400 lg:w-[95%]'>Bharat Codepedia is dedicated to transforming online education. We are committed to creating a brighter tomorrow by providing cutting-edge courses, harnessing emerging technologies, and nurturing a dynamic learning community.</p>
          </header>
          <div className='sm:h-[70px] lg:h-[150px]'></div>
          <div className='absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5'>
            <img src={BannerImage1} />
            <img src={BannerImage2} />
            <img src={BannerImage3} />
          </div>
        </div>
      </section>
   

      {/* section 2 */ }

  <section className='border-b border-richblack-700'>
    <div className='mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-900'>
      <div className='h-[100px] '></div>
      <Quote />
    </div>
  </section>


    <section>
      <div className='mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richgold-500'>
        {/* founding story wala div */}
        <div className='flex flex-col items-center gap-10 lg:flex-row justify-between '>
          {/* founding story left box */}
          <div className='my-24 flex lg:w-[50%] flex-col gap-10'>
            <h1 className='bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] '>Our Unique Journey</h1>

            <p className='text-base font-medium text-richred-900 lg:w-[95%]'>
            Bharat Codepedia voyage was sparked by a shared dream to revolutionize education. It began with a diverse group of educators, tech enthusiasts, and lifelong learners who recognized the growing need for accessible, adaptable, and high-quality learning opportunities in an ever-evolving digital landscape.
            </p>

            <p className='text-base font-medium text-richblack-300 lg:w-[95%]'>
            As experienced educators ourselves, we bore witness to the limitations and challenges of conventional education systems. We firmly believed that education should break free from classroom confines and geographical boundaries. Our vision was to bridge these gaps and empower individuals from all walks of life to unlock their boundless potential.
            </p>
          </div>
          {/* founding story right box */}
          <div>
            <img className='shadow-[0_0_20px_0] shadow-[#FC6767]' src={FoundingStory} />
          </div>
        </div>

        {/* vision and mission wala parent div */}
        <div className='flex flex-col items-center lg:gap-10 lg:flex-row justify-between'>
          {/* left box */}
          <div className='my-24 flex lg:w-[40%] flex-col gap-10'>
            <h1 className='bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] '>Our Vision</h1>
            <p className='text-base font-medium text-richwhite-300 lg:w-[95%]'>
            With this vision in our hearts, we embarked on a mission to craft an e-learning platform that would redefine the way people learn. Our dedicated team of experts toiled tirelessly to create a robust and user-friendly platform, blending state-of-the-art technology with captivating content. Our aim was to foster a dynamic and interactive learning experience.
        </p>
          
          </div>

          {/* right box */}
          <div className='my-24 flex lg:w-[40%] flex-col gap-10'>
            <h1 className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] '>Our Mission</h1>
            <p className='text-base font-medium text-richwhite-300 lg:w-[95%]'>
            Our mission extends beyond online course delivery. We aspired to cultivate a vibrant community of learners, where individuals could connect, collaborate, and learn from one another. We firmly believe that knowledge flourishes in an atmosphere of sharing and dialogue. We nurture this collaborative spirit through forums, live sessions, and networking opportunities.
  
            </p>
          </div>
        </div>
      </div>
    </section>
  


  {/* section 4 */ }
  <StatsComponent />

  {/* section 5 */ }
      <section className='mx-auto p-2 flex flex-col items-center justify-between gap-5 mb-[160px]'>
        <LearningGrid />
        <ContactFormSection />
      </section>

      

    </div >
  )
}

export default About
