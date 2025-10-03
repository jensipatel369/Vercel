import React from 'react'

export default function Contact() {
    return (
        <div>
            <section id="contacts" className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center flex flex-col items-center">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">Contacts</h2>
                    <div className="mx-auto mt-3 h-2 w-8 rounded-full bg-pink-200" />
                    <div className="mt-8 sm:mt-10 md:mt-12 text-left flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-28 justify-center items-start sm:items-center">
                        <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                            <div className="mt-1 h-6 w-6 sm:h-6.5 sm:w-6.5 rounded-full bg-rose-300 flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#fff" d="m20 8l-8 5l-8-5v10h16zm0-2H4l8 4.99z" opacity="0.3" /><path fill="#fff" d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2M20 6l-8 4.99L4 6zM4 8l8 5l8-5v10H4z" /></svg>
                            </div>
                            <div>
                                <p className="font-medium text-sm sm:text-base">E-mail</p>
                                <p className="text-xs sm:text-sm text-gray-600 break-all">jensipatel369@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                            <div className="mt-1 h-6 w-6 sm:h-6.5 sm:w-6.5 rounded-full bg-rose-300 flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#fff" d="M19 17.47c-.88-.07-1.75-.22-2.6-.45l-1.19 1.19c1.2.41 2.48.67 3.8.75v-1.49zM5.03 5c.09 1.32.35 2.59.75 3.8l1.2-1.2c-.23-.84-.38-1.71-.44-2.6z" opacity="0.3" /><path fill="#fff" d="M9.07 7.57A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02m7.33 9.45c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM5.79 8.8c-.41-1.21-.67-2.48-.76-3.8h1.5a13 13 0 0 0 .46 2.59z" /></svg>
                            </div>
                            <div>
                                <p className="font-medium text-sm sm:text-base">Telephone number</p>
                                <p className="text-xs sm:text-sm text-gray-600">+91 81281 44211</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                            <div>
                                <p className="font-medium text-sm sm:text-base">Social media</p>
                                <div className="mt-1 flex gap-2 text-rose-400 justify-center sm:justify-start">
                                    <div className="h-6 w-6 rounded-full bg-rose-200 flex items-center justify-center">
                                        <a href="https://github.com/jensipatel369" target='_blank'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10" /></svg>
                                        </a>
                                    </div>
                                    <div className="h-6 w-6 sm:h-6.5 sm:w-6.5 rounded-full bg-rose-200 flex items-center justify-center">
                                        <a href="https://www.linkedin.com/in/jensi-sakhiya-a58634387/" target='_blank'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="-2 -2 24 24"><g fill="#fff"><path d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457c-.592 0-.945.398-1.1.784c-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066c1.41 0 2.468.922 2.468 2.902M6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115c-.014-.632-.465-1.114-1.199-1.114m-1.086 9.556h2.144V8.38H5.127z" /><path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10" /></g></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}