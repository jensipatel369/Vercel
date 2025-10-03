import React from 'react'

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="text-white/90 text-base sm:text-lg font-semibold tracking-wide">Jensi.dev</a>
          <ul className="hidden sm:flex gap-4 md:gap-8">
            <li><a href="#about" className="text-white/80 hover:text-white transition text-sm md:text-base">About me</a></li>
            <li><a href="#skills" className="text-white/80 hover:text-white transition text-sm md:text-base">My skills</a></li>
            <li><a href="#portfolio" className="text-white/80 hover:text-white transition text-sm md:text-base">Portfolio</a></li>
            <li><a href="#contacts" className="text-white/80 hover:text-white transition text-sm md:text-base">Contacts</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
