import React from 'react';
import ContactUsForm from '../Components/contactUs/ContactUsForm';

const ContactUs = () => {
    return (
        <div>
            <div className='mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row'>
                <div className='lg:w-[40%]'>
                    <div className='flex flex-col gap-6 rounded-xl bg-yellow-300 p-4 lg:p-6'>
                        <div className='flex flex-col gap-[2px] p-3 text-sm text-richblack-900'>
                            <div className='flex flex-row items-center gap-3'>
                                <svg
                                    stroke='currentColor'
                                    fill='currentColor'
                                    strokeWidth='0'
                                    viewBox='0 0 24 24'
                                    aria-hidden='true'
                                    height='25'
                                    width='25'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z'
                                    ></path>
                                    <path
                                        d='M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z'
                                    ></path>
                                </svg>
                                <h1 className='text-lg font-semibold text-richblack-5'>Chat with Us</h1>
                            </div>
                            <p className='font-medium'>Our friendly team is here to help.</p>
                            <p className='font-semibold'>info@bharatcodepedia.com</p>
                        </div>
                        <div className='flex flex-col gap-[2px] p-3 text-sm text-richblack-900'>
                            <div className='flex flex-row items-center gap-3'>
                                <svg
                                    stroke='currentColor'
                                    fill='currentColor'
                                    strokeWidth='0'
                                    viewBox='0 0 24 24'
                                    height='25'
                                    width='25'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12zm-5.67-7.126a176.49 176.49 0 01-15.29 28.58c-10.63 15.90-21.40 28.21-39.38 36.58A67.42 67.42 0 01391 480z'
                                    ></path>
                                </svg>
                                <h1 className='text-lg font-semibold text-richblack-5'>Visit Us</h1>
                            </div>
                            <p className='font-medium'>Come and say hello at our office HQ.</p>
                            <p className='font-semibold'>
                                Updated Address:West Bengal Address: 45B, Park Street, Kolkata-700016
                            </p>
                        </div>
                        <div className='flex flex-col gap-[2px] p-3 text-sm text-richblack-900'>
                            <div className='flex flex-row items-center gap-3'>
                                <svg
                                    stroke='currentColor'
                                    fill='currentColor'
                                    strokeWidth='0'
                                    viewBox='0 0 512 512'
                                    height='25'
                                    width='25'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0128.64-15.2c-3.78 9.7-4.39 17.13-4.46 27.73-.08 12.3.96 25.18 3.22 38.52 1.53 9.75 3.29 18.07 7.74 27.53 1.02 1.58 2.16 3.12 3.42 4.62 7.45 9.92 17.58 19.7 29.88 29.73 14.49 12.17 29.52 24.72 45.31 38.32 16.19 13.02 33.77 26.6 51.73 41.24 28.92 20.83 50.25 39.61 78.41 51.49 9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 01-15.29 28.58c-10.63 15.90-21.40 28.21-39.38 36.58A67.42 67.42 0 01391 480z'
                                    ></path>
                                </svg>
                                <h1 className='text-lg font-semibold text-richblack-5'>Call Us</h1>
                            </div>
                            <p className='font-medium'>Mon - Fri From 8am to 5pm</p>
                            <p className='font-semibold'>Updated Phone: +91 4566 0000 777</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[60%]'>
                    <div className='border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col'>
                        <h1 className='text-4xl leading-10 font-semibold text-richblack-5'>
                            Got an Idea? We've got the skills. Let's team up
                        </h1>
                        <p className='text-lg font-medium'>Tell us more about yourself .</p>
                        <div className='mt-7'>
                            <ContactUsForm />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;

