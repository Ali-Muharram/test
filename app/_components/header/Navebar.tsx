"use client"
import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image'

import { Metadata } from 'next';




export default function Navebar() {
    const [activepage, setactivepage] = useState(0)
    const [path, setpath] = useState("/")
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);







    const ref = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)

    /* -------------- navebar toogle open and close in phone style -------------- */

    const toggleHeight = () => {
        if (isOpen) {
            contentRef.current.classList.remove("p-3")
            contentRef.current.classList.remove("max-h-[1000px]")
            contentRef.current.classList.add("max-h-0")
        }
        if (!isOpen) {
            contentRef.current.classList.add("p-3")
            contentRef.current.classList.add("max-h-[1000px]")

            contentRef.current.classList.remove("max-h-0")
        }

        setIsOpen(!isOpen)

    };

    const handleScroll = () => {

        if (window.scrollY > 110) { // Change 100 to your desired scroll position
            ref.current.classList.add('fixed', 'bg-opacity-70');
            ref2.current.classList.remove('hidden',);
            ref3.current.classList.remove('hidden',);
        } else {
            ref.current.classList.remove('fixed', 'bg-opacity-70' ,"~top-0/60");
            ref2.current.classList.add('hidden',);
            ref3.current.classList.add('hidden',);
        }

    };

    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    /* ------------------------------ get page name ----------------------------- */

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setpath(window.location.pathname);
           

        });

        observer.observe(document, { childList: true, subtree: true });

        return () => {
            observer.disconnect(); // تنظيف عند إلغاء التركيب
        };
    }, []);



    return (
        <>
            <nav
                ref={ref}
                className='bg-white backdrop-blur-lg  z-40    shadow-custom w-full flex   items-center justify-center font-semibold '>
                <div className='w-full max-w-[1100px] flex items-center  md:py-3 '>
                    <nav className='flex-1'>
                        <div className='w-full flex justify-between items-center md:hidden'>
                            <svg
                                onClick={() => { toggleHeight() }}
                                className=" cursor-pointer  m-2 " xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#2ed87b"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>


                            <Link
                                ref={ref3} href="/" className='bg-[#314555] hidden'>
                                <Image
                                    src="/logo.png" // مسار الصورة
                                    alt="شعار Couponis" // نص بديل للصورة
                                    width={120}
                                    height={40}
                                    // This makes the image fill its parent container
                                    style={{ objectFit: 'contain' }}
                                />
                            </Link>
                        </div>

                        <ul
                            ref={contentRef}

                            className={` max-h-0 flex overflow-hidden transition-height duration-200   ease-in-out   flex-col gap-5 md:flex md:flex-row md:max-h-fit md:p-3 `} >
                            <Link   onClick={() => { toggleHeight() }} href='/' className={`${path == "/" ? "text-main" : ""} md:px-5  hover:text-main`}> الرئيسيه</Link>
                            <Link   onClick={() => { toggleHeight() }} href='/stores' className={` ${path == "/stores" ? "text-main" : ""} hover:text-main`}  >كل المتاجر</Link>
                            <Link   onClick={() => { toggleHeight() }} href='/coupons-list' className={` ${path == "/coupons-list" ? "text-main" : ""} hover:text-main`} >كوبونات وعروض</Link>
                            <Link   onClick={() => { toggleHeight() }} href='/categories' className={`${path == "/categories" ? "text-main" : ""} hover:text-main`} >الاقسام</Link>
                            <Link   onClick={() => { toggleHeight() }} href='/blog' className={` ${path == "/blog" ? "text-main" : ""} hover:text-main`}>المدونه</Link>

                        </ul>
                    </nav>
                </div>

            </nav>
            <div
                ref={ref2}
                className='hidden p-2 w-full bg-gray-100 text-transparent md:p-6'>
                s
            </div>

        </>
    )

}
