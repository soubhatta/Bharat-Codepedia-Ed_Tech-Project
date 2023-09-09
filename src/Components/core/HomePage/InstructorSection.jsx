import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import CTAButton from "../HomePage/Button"
import { FaArrowRight } from 'react-icons/fa'

const InstructorSection = () => {
  return (
    <div className='mt-16 bg-richblue-600'>
      <div className='flex flex-col md:flex-row gap-20 items-center text-white'>

        <div className='w-[50%]'>
            <img
                src={Instructor}
                alt=""
                className='shadow-white shadow-[-1.3rem_-1rem_0_0]'
            />
        </div>

        <div className='md:w-[50%] flex flex-col gap-10'>
            <div className='text-4xl font-semobold md:w-[50%]'>
                Become an
                <HighlightText text={" Educator"} />
            </div>

            <p className='font-medium text-[16px] w-[80%] text-richblack-300'>
            Instructors from around the world educate millions of students through Bharat Codepedia. We equip you with the tools and expertise to share your passion and make a positive impact.
            </p>

            <div className='w-fit mx-auto'>
                <CTAButton active={true} linkto={"/signup"}>
                    <div className='flex flex-row gap-2 items-center'>
                        Start Learning Today
                        <FaArrowRight />
                    </div>
                </CTAButton>
            </div>


        </div>

      </div>
    </div>
  )
}

export default InstructorSection
