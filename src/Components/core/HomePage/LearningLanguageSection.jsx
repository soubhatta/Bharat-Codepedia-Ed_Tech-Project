import React from 'react'
import HighlightText from './HighlightText'
import know_your_progress from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from "../HomePage/Button"

const LearningLanguageSection = () => {
    return (
        <div className='mt-[130px] mb-32'>
            <div className='flex flex-col gap-5 items-center'>

                <div className='text-4xl font-semibold text-center'>
                    Your Ultimate Language Learning Companion for
                    <HighlightText text={" learning any language"} />
                </div>

                <div className='text-center text-richblack-600 mx-auto text-base font-medium w-[70%]'>
                    Master Multiple Languages with Ease: 20+ Realistic Voice-Overs, Progress Tracking, Custom Schedules, and Beyond.
                </div>

                <div className='flex flex-col lg:flex-row items-center justify-center mt-5'>
    <img
        src={know_your_progress}
        alt="KnowYourProgressImage"
        className='object-contain lg:mr-5 md:mb-0 mb-5'
    />
    <img
        src={compare_with_others}
        alt="CompareWithOthersImage"
        className='object-contain lg:mx-5'
    />
    <img
        src={plan_your_lesson}
        alt="PlanYourLessonImage"
        className='object-contain lg:ml-5 md:mt-0 mt-5'
    />
</div>


                <div className='w-fit'>
                    <CTAButton active={true} linkto={"/signup"}>
                        <div>
                            Learn more
                        </div>
                    </CTAButton>
                </div>

            </div>
        </div>
    )
}

export default LearningLanguageSection
