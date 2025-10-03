import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="bg-neutral-900 text-neutral-300 text-xs sm:text-sm">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 sm:h-16 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-0">
                    <p className="text-center">Copyright © 2025 <span className="text-rose-300">Jensi</span></p>
                    <a href="#home" className="text-neutral-400 hover:text-white text-xs sm:text-sm">BACK TO TOP</a>
                </div>
            </footer>
        </div>
    )
}