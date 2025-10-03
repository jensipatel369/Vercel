import React from 'react'

export default function Portfolio() {
    let projects = [
        {
            image: "wrogn.png",
            title: "WROGN by Virat Kohli",
            disc : "Using by Tailwind CSS",
            github: "https://github.com/jensipatel369/Tailwind/tree/main/WROGN",
            demo: "https://wrognn.netlify.app/"
        },      
        {
            image: "zometo.png",
            title: "District by Zomato",
            disc : "Using by React JS",
            github: "https://github.com/jensipatel369/React-JS/tree/main/Project/district%20by%20zometo",
            demo: "https://district-by-zometo.vercel.app/"
        },      
        {
            image: "BCCI.png",
            title: "BCCI",
            disc : "Using by Tailwind CSS",
            github: "https://github.com/jensipatel369/Tailwind/tree/main/BCCI",
            demo: "https://bccii.netlify.app/"
        },    
         {
            image: "e-shop.png",
            title: "E-Shop",
            disc : "Using by HTML - CSS and Media Query",
            github: "https://github.com/jensipatel369/MQ-BT/tree/main/Media%20Query%20(MQ)/E-Shop",
            demo: "https://tangerine-stroopwafel-3f3ed0.netlify.app/"
        },      
        {
            image: "healthy.png",
            title: "Healthy Treats",
            disc : "Using by Tailwind CSS",
            github: "https://github.com/jensipatel369/Tailwind/tree/main/Healthy%20%20Treat",
            demo: "https://healthytreat.netlify.app/"
        }  
    ]

    return (
        <div>
            <section id="portfolio" className="py-12 sm:py-16 md:py-20 bg-white text-black">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 text-center">Projects</h2>
                    <div className="mx-auto mt-3 h-2 w-8 rounded-full bg-pink-200" />
                    <div className="mt-8 sm:mt-10 md:mt-12 gap-4 sm:gap-6 md:gap-7 flex justify-center flex-wrap">
                        {
                            projects.map((e, i) => {
                                return <div key={i} className='border-1 border-[#d8d8d8] rounded-md w-full sm:w-80 md:w-87 flex flex-col items-center max-w-sm'>
                                    <img src={e.image} alt={e.title} className='w-full border-b-1 rounded-t-md border-[#d8d8d8]' />
                                    <h1 className='font-semibold text-lg sm:text-xl pt-2 hover:text-[#ec88ac] cursor-pointer duration-300 text-center px-2'>{e.title}</h1>
                                    <p className='text-xs sm:text-sm text-gray-600 pt-1 hover:text-[#ec88ac] cursor-pointer duration-300 text-center px-2'>{e.disc}</p>
                                    <div className='flex gap-2 sm:gap-4 items-center py-3 px-2'>
                                        <button className="border-1 p-1.5 rounded-sm flex gap-1 items-center hover:text-[#ec88ac] hover:scale-105 duration-300 group">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="block group-hover:hidden" width="16" height="16" viewBox="0 0 24 24"><path fill="#000" d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10" /></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="hidden group-hover:block" width="16" height="16" viewBox="0 0 24 24"><path fill="#ec88ac" d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10" /></svg>
                                            <a href={e.github} target="_blank" rel="noopener noreferrer" className="text-xs">Get Code</a>
                                        </button>
                                        <button className='border-1 p-1.5 rounded-sm flex gap-1 items-center hover:text-[#ec88ac] hover:scale-105 duration-300 group'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className='mt-0.5 block group-hover:hidden' width="11" height="11" viewBox="0 0 48 48"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 6h14v14m0 9.474V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h9m7.8 16.2L41.1 6.9" /></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" className='mt-0.5 hidden group-hover:block' width="11" height="11" viewBox="0 0 48 48"><path fill="none" stroke="#ec88ac" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 6h14v14m0 9.474V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h9m7.8 16.2L41.1 6.9" /></svg>
                                            <a href={e.demo} target="_blank" rel="noopener noreferrer" className='text-xs'>Live Demo</a>
                                        </button>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}