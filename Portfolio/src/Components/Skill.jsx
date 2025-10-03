import React from 'react'

export default function Skill() {
    return (
        <div>
            <section id="skills" className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">My skills</h2>
                    <div className="mx-auto mt-3 h-2 w-8 rounded-full bg-pink-200" />
                    <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                        {['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'React JS', 'Material UI'].map(label => (
                            <div key={label} className="h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 lg:h-24 lg:w-24 rounded-full bg-[#ec88ac] cursor-pointer transition-colors duration-300 text-white flex items-center justify-center text-xs sm:text-sm md:text-base shadow-sm text-center px-1">
                                {label}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
