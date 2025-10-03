import React from 'react'

export default function About() {
    return (
        <div>
            <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">About me</h2>
                    <div className="mx-auto mt-3 h-2 w-8 rounded-full bg-pink-200" />
                    <p className="mt-6 leading-6 sm:leading-7 text-sm sm:text-base text-gray-600">
                        I am a passionate Full Stack Developer (Fresher) with skills in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React.js, Node.js, Express.js, and databases like MySQL & MongoDB. I enjoy building responsive web applications and solving problems through clean, efficient code. Eager to learn and grow, I'm looking for opportunities to apply my knowledge, contribute to real-world projects, and expand my expertise in modern web technologies.
                    </p>
                </div>
            </section>
        </div>
    )
}