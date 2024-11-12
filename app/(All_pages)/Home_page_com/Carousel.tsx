"use client"
import React, { useState, useEffect } from 'react'
import Copon_model from '../../_components/Copon_model/Copon_model';
import Image from 'next/image';



export default function Carousel({ slider }) {
    // console.log(slider.data[0].image.formats.small.url);

    let [currentIndex, setCurrentIndex] = useState<number>(0);
    const [modal_copon, setmodal_copon] = useState(false)
    const [array_carousel, setarray_carousel] = useState(
        Array.isArray(slider) ? slider : []
    )








    const next = () => {
        setCurrentIndex((currentIndex + 1) % array_carousel.length);
    }
    const Previous = () => {
        setCurrentIndex((currentIndex - 1 + array_carousel.length) % array_carousel.length);
    }
    const postion = (pos) => {
        setCurrentIndex(pos)
    }

    useEffect(() => {
        const interval = setInterval(next, 3000);
        return () => clearInterval(interval); // تنظيف الـ interval عند فك التركيب
    }, [currentIndex]);

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            alert(`تم نسخ الرقم إلى الحافظة: ${text}`);
        } catch (err) {
            console.error('فشل في نسخ النص: ', err);
        }
    };


    return (
        <section className=' w-full h-fit '>



            <div id="default-carousel" className="relative w-full h-full flex" data-carousel="slide">

                <div className=" flex   h-full overflow-hidden rounded-lg md:h-full">
                    {array_carousel.map((slider: any, index: React.Key) => (
                        <a
                            href={slider.market_url} onClick={() => copyToClipboard(slider.coupon)} target='blank' key={index}
                            className={`  min-w-full  flex flex-col  object-cover h-full  duration-700 ease-in-out`} data-carousel-item style={{ transform: `translateX(${currentIndex * 100}%)`, objectFit: "cover" }}>
                            <div className='flex bg-black h-full'>
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_API_HOST}uploads/slider/${slider.photo_url}`}
                                    alt={`imgg`}
                                    width={100}
                                    height={100}
                                    layout='responsive'
                                   
                                    loading='lazy' 
                                   
                                    decoding="async"
                                    objectPosition="center"
                                />
                            </div>

                        </a>
                    ))}



                </div>

                <div className="absolute z-10 flex -translate-x-1/2 bottom-2 left-1/2 space-x-3 rtl:space-x-reverse md:bottom-5">
                    {array_carousel.map((slider, index) => (
                        <button onClick={() => { postion(index) }} type="button" className={` ${currentIndex == index ? "bg-main" : "bg-gray-300"} transition-all duration-300 md:w-3 md:h-3 w-1 h-1 rounded-full px-3 md:px-0 `} aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    ))}
                </div>

                <button
                    onClick={Previous}
                    type="button" className=" hidden h-full   absolute top-0 start-0 z-10  items-center justify-center  px-4 cursor-pointer group focus:outline-none md:flex" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-400/40  group-hover:bg-[#2ed87b]  group-focus:ring-white  group-focus:outline-none">
                        <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    onClick={next}
                    type="button" className=" hidden h-full  absolute top-0 end-0 z-10  items-center justify-center  px-4 cursor-pointer group focus:outline-none md:flex" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-400/40  group-hover:bg-[#2ed87b]  group-focus:ring-white  group-focus:outline-none">
                        <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
            {modal_copon &&
                <Copon_model action={setmodal_copon} />
            }


        </section>
    )
}
