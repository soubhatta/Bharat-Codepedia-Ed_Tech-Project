import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CTAButton from '../Components/core/HomePage/Button';
import HighlightText from '../Components/core/HomePage/HighlightText';
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../Components/core/HomePage/CodeBlocks";
import TimelineSection from '../Components/core/HomePage/TimelineSection';
import LearningLanguageSection from '../Components/core/HomePage/LearningLanguageSection';
import InstructorSection from '../Components/core/HomePage/InstructorSection';
import ExploreMore from '../Components/core/HomePage/ExploreMore';
import { useDispatch } from 'react-redux';
import { setProgress } from "../slices/loadingBarSlice";
import { getCatalogaPageData } from '../services/operations/pageAndComponentData';
import CourseSlider from '../Components/core/Catalog/CourseSlider';
import { useEffect } from 'react';
import { useState } from 'react';
import RatingSlider from '../Components/core/Ratings/RatingSlider';



function Home() {
    const [CatalogPageData, setCatalogPageData] = useState(null);
    const categoryID = "6475dbeb49dcc886b5698441";
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCatalogPageData = async () => {
            const result = await getCatalogaPageData(categoryID, dispatch);
            setCatalogPageData(result);
        };

        if (categoryID) {
            fetchCatalogPageData();
        }
    }, [categoryID, dispatch]);

    return (
        <div className="bg-blue-600 text-richblack-900">
            <div className="mx-auto relative flex flex-col w-11/12 items-center justify-between text-white">
                <Link onClick={() => dispatch(setProgress(100))} to="/signup">
                    <div className="group mt-16 p-1 mx-auto rounded-full bg-yellow-500 font-bold transition-all duration-200 hover:scale-95 w-fit max-w-maxContent">
                        <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-yellow-600">
                            <p>Become an Instructor</p>
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>

                <div className="text-center text-3xl md:text-4xl font-semibold mt-7">
                    Empower Your Future With <HighlightText text={"Coding Skills"} />
                </div>

                <div className="mt-4 w-[90%] text-left md:text-center text-sm md:text-lg font-bold text-white-50">
                    Learn coding at your own pace with our online courses. Access a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors, from anywhere in the world.
                </div>

                <div className="flex flex-row gap-7 mt-8">
                    <CTAButton active={true} linkto="/signup">
                        Learn More
                    </CTAButton>
                    <CTAButton active={false} linkto="/login">Book a Demo</CTAButton>
                </div>

                <div className="mx-3 my-12 shadow-blue-200 w-[70%] relative">
                    <div className="grad2 -top-10 w-[800px]"></div>
                    <video className="video"
                        muted
                        loop
                        autoPlay
                    >
                        <source src={Banner} type="video/mp4" />
                    </video>
                </div>

                <div>
                    <CodeBlocks
                        position={"lg:flex-row"}
                        heading={
                            <div className=" font-semibold text-2xl lg:text-4xl sm:w-full">
                                Unlock Your
                                <HighlightText text={" coding potential "} />
                                with our online courses
                            </div>
                        }
                        subheading={
                            "Bharat Codepedia courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                        }
                        ctabtn1={
                            {
                                btnText: "Try it yourself",
                                linkto: "/signup",
                                active: true,
                            }
                        }
                        ctabtn2={
                            {
                                btnText: "learn more",
                                linkto: "/login",
                                active: false,
                            }
                        }
                        codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
                        codeColor={"white"}
                        backgroudGradient={"grad"}
                    />
                </div>

                <div className="mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
                    <h2 className="section_heading mb-6 md:text-3xl text-xl">Most Popular Courses</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Course 1 */}
                        <div className="bg-blue rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                            <img
                                src="https://res.cloudinary.com/dbr73rpz9/image/upload/v1688630790/images/computers-others-wallpaper-preview_suhi9b.jpg"
                                alt="Image 1"
                                className="w-full h-auto"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Learn JAVA Programming - Beginner to Master</h3>
                                <p className="text-black-600">Deep Dive in Core Java programming -Standard Edition. A Practical approach to learn Java. Become a Java Expert</p>
                            </div>
                        </div>

                        {/* Course 2 */}
                        <div className="bg-blue rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                            <img
                                src="https://1.bp.blogspot.com/-Z7KvrVr9ezE/Xp6VPUpvSJI/AAAAAAAADNs/zDX6USVYn8UxS00bbQZcyWYUPLMkMCEQQCLcBGAsYHQ/s1600/Learn%2BHTML%2BCSS%2Bcourse%2Bwith%2Btutorials.jpg"
                                alt="Image 2"
                                className="w-full h-auto"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Learn HTML Programming From Scratch</h3>
                                <p className="text-black-600">Learn: HTML | CSS | JavaScript | Web programming | Web development | Front-end | Responsive | JQuery</p>
                            </div>
                        </div>
                        {/* Course 3 */}
                        <div className="bg-blue rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                            <img
                                src="https://coderstrustbd.com/wp-content/uploads/2021/08/react-js-banner.jpg"
                                alt="Image 3"
                                className="w-full h-auto"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">React - The Complete Guide 2023 (incl. React Router & Redux)</h3>
                                <p className="text-black-600">Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
                    <h2 className="section_heading mb-6 md:text-3xl text-xl">Placement Guide</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Course 1 */}
                        <div className="bg-blue rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                            <img
                                src="https://www.creativeitinstitute.com/images/course/course_1662804460.jpg"
                                alt="Image 1"
                                className="w-full h-auto"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Python for Data Science and Machine Learning</h3>
                                <p className="text-black-600">Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!</p>
                            </div>
                        </div>

                        {/* Course 2 */}
                        <div className="bg-blue rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                            <img
                                src="https://ccweb.imgix.net/https%3A%2F%2Fimg.youtube.com%2Fvi%2FCBYHwZcbD-s%2Fhqdefault.jpg?ar=16%3A9&auto=format&cs=strip&fit=crop&h=380&ixlib=php-4.1.0&w=535&s=72fbf1a06f4f74e1cc24aace8f328d8f"
                                alt="Image 2"
                                className="w-full h-auto"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Mastering Data Structures & Algorithms using C and C++</h3>
                                <p className="text-black-600">Learn, Analyse and Implement Data Structure using C and C++. Learn Recursion and Sorting.</p>
                            </div>
                        </div>

                        {/* Course 3 */}
                        <div className="bg-blue rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                            <img
                                src="https://www.simplilearn.com/ice9/app/IntroductiontoC360x194.jpg"
                                alt="Image 3"
                                className="w-full h-auto"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Learn C++ Programming -Beginner to Advance- Deep Dive in C++</h3>
                                <p className="text-black-600">Classroom and Hands-on sessions- Features of C++ 11 , Exception Handling and STL - for Both Academics and Industry</p>
                            </div>
                        </div>
                    </div>
                </div>




                <div>
                    <CodeBlocks
                        position={"lg:flex-row-reverse"}
                        heading={
                            <div className="text-4xl font-semibold">
                                Start
                                <HighlightText text={" coding in seconds "} />
                            </div>
                        }
                        subheading={
                            "Feel free to explore and experiment. Our interactive learning environment ensures you'll start writing actual code from day one."
                        }
                        ctabtn1={
                            {
                                btnText: "Continue Lesson",
                                linkto: "/signup",
                                active: true,
                            }
                        }
                        ctabtn2={
                            {
                                btnText: "learn more",
                                linkto: "/login",
                                active: false,
                            }
                        }
                        codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
                        codeColor={"text-yellow-25"}
                        backgroudGradient={"grad2"}
                    />
                </div>

                <ExploreMore />
            </div>

            <div className="hidden lg:block lg:h-[200px]"></div>

            <div className="bg-pure-greys-5 text-richblack-700">
                <div className="homepage_bg h-[310px]">
                    <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
                        <div className="h-[150px]"></div>
                        <div className="flex flex-row gap-7 text-white ">
                            <CTAButton active={true} linkto="/catalog/Web Developement">
                                <div className="flex items-center gap-3" >
                                    Explore Full Catalog
                                    <FaArrowRight />
                                </div>
                            </CTAButton>
                            <CTAButton active={false} linkto="/signup">
                                <div>
                                    Learn more
                                </div>
                            </CTAButton>
                        </div>
                    </div>
                </div>

                <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
                    <div className="flex flex-row gap-5 mb-10 mt-[95px]">
                        <div className="text-4xl font-semibold w-[45%]">
                            Get the Skills you need for a
                            <HighlightText text={" Job that is in demand" } />
                        </div>
                        <div className="flex flex-col gap-10 w-[40%] items-start">
                            <div className="text-[16px]">
                                The modern Bharat Codepedia is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                            </div>
                            <CTAButton active={true} linkto="/signup">
                                <div>
                                    Learn more
                                </div>
                            </CTAButton>
                        </div>
                    </div>
                    <TimelineSection />
                    <LearningLanguageSection />
                </div>
            </div>

            <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white">
                <InstructorSection />
            </div>

        </div>
    );
}

export default Home;