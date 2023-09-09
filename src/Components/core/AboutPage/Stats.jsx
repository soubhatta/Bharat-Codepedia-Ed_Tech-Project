import React, { useState, useEffect } from 'react';

const Stats = [
    { count: 5000, label: 'Active Students' },
    { count: 10, label: 'Mentors' },
    { count: 200, label: 'Courses' },
    { count: 50, label: 'Awards' },
];

const StatsComponent = () => {
    const [displayedStats, setDisplayedStats] = useState([]);

    useEffect(() => {
        const updateStats = () => {
            setDisplayedStats(
                Stats.map((stat) => ({
                    ...stat,
                    targetCount: stat.count,
                    currentCount: 0,
                    increment: Math.ceil(stat.count / 120), // Adjust the increment for speed
                }))
            );
        };

        updateStats();

        const interval = setInterval(() => {
            setDisplayedStats((prevStats) =>
                prevStats.map((stat) => ({
                    ...stat,
                    currentCount: Math.min(
                        stat.targetCount,
                        stat.currentCount + stat.increment
                    ),
                }))
            );
        }, 100); // Update every 100ms

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <section className="bg-richblack-900">
            <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 text-center">
                    {displayedStats.map((data, index) => {
                        return (
                            <div key={index} className="flex flex-col py-10">
                                <h1 className="text-[30px] font-bold text-richblack-5">
                                    {data.currentCount}
                                </h1>
                                <h2>{data.label}</h2>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default StatsComponent;
