import React from 'react'

export default function Hero() {
    return (
        <div>
            <section id="home" className="relative min-h-[80vh] flex items-center justify-center text-center"
                style={{ backgroundImage: "url('Bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 md:px-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        Hi there! My name is Jensi and
                        <br className="hidden sm:block" /> <span className="sm:hidden"> </span>I'm a <span className="text-pink-300">Full Stack Developer</span>
                    </h1>
                </div>
            </section>
        </div>
    )
}
