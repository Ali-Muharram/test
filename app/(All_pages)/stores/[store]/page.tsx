"use client"
import React, { useRef, useState } from 'react'
import Store_header from './store_header_folder/Store_header'
import Copones from '../../../_components/copones/Copones'
import Store_post from './store_post_folder/store_post'
import Gide_read_more from './store_post_folder/gide_read_more'
import Left_section_Copones_posts from '../../../_components/left_section_posts/left_section_Copones_posts'
import Left_section_market from '../../../_components/left_section_market/left_section_market'

export default function page() {

    const [isOpen, setIsOpen] = useState(false);


    const contentRef = useRef(null);
    const contentRef2 = useRef(null);

    /* -------------- navebar toogle open and close in phone style -------------- */

    const toggleHeight1 = (ob) => {
        if (isOpen) {
            ob.current.classList.remove("p-3")
            ob.current.classList.remove("max-h-[1000px]")
            ob.current.classList.add("max-h-0")
        }
        if (!isOpen) {
            ob.current.classList.add("p-3")
            ob.current.classList.add("max-h-[1000px]")
            ob.current.classList.remove("max-h-0")
        }

        setIsOpen(!isOpen)

    };

    let gide_more = useRef(null)
    return (
        <section className='w-full grid grid-cols-1 gap-5 '>

            <Store_header gide_more={gide_more} />
            <div className='w-full flex flex-col gap-5'>

                <div className='w-full h-fit grid grid-cols-1 gap-5 lg:grid-cols-4 '>
                    <div className='lg:col-span-3 w-full flex flex-col   gap-5'>
                        {/* <div className='flex gap-2 bg-white  p-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={"22px"} viewBox="0 0 448 512"><path fill="#2ed87b" d="M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>
                            <h4 className='font-[600] text-lg'>  احدث الكوبونات والعروض</h4>
                        </div> */}
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Copones coponeData={[]} />
                        ))

                        }
                    </div>
                    <div className='lg:col-span-1  flex flex-col  gap-5 '>
                        {/* <div className='flex gap-2 bg-white  p-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" viewBox="0 0 448 512"><path fill="#2ed87b" d="M446.6 222.7c-1.8-8-6.8-15.4-12.5-18.5-1.8-1-13-2.2-25-2.7-20.1-.9-22.3-1.3-28.7-5-10.1-5.9-12.8-12.3-12.9-29.5-.1-33-13.8-63.7-40.9-91.3-19.3-19.7-40.9-33-65.5-40.5-5.9-1.8-19.1-2.4-63.3-2.9-69.4-.8-84.8 .6-108.4 10C45.9 59.5 14.7 96.1 3.3 142.9 1.2 151.7 .7 165.8 .2 246.8c-.6 101.5 .1 116.4 6.4 136.5 15.6 49.6 59.9 86.3 104.4 94.3 14.8 2.7 197.3 3.3 216 .8 32.5-4.4 58-17.5 81.9-41.9 17.3-17.7 28.1-36.8 35.2-62.1 4.9-17.6 4.5-142.8 2.5-151.7zm-322.1-63.6c7.8-7.9 10-8.2 58.8-8.2 43.9 0 45.4 .1 51.8 3.4 9.3 4.7 13.4 11.3 13.4 21.9 0 9.5-3.8 16.2-12.3 21.6-4.6 2.9-7.3 3.1-50.3 3.3-26.5 .2-47.7-.4-50.8-1.2-16.6-4.7-22.8-28.5-10.6-40.8zm191.8 199.8l-14.9 2.4-77.5 .9c-68.1 .8-87.3-.4-90.9-2-7.1-3.1-13.8-11.7-14.9-19.4-1.1-7.3 2.6-17.3 8.2-22.4 7.1-6.4 10.2-6.6 97.3-6.7 89.6-.1 89.1-.1 97.6 7.8 12.1 11.3 9.5 31.2-4.9 39.4z" /></svg>
                            <h4 className='font-[600] text-lg'> مقاله المتجر</h4>
                        </div> */}



                        <div
                            onClick={() => { toggleHeight1(contentRef) }}
                            className='  '>

                            <div className='w-full p-3  flex items-center justify-between bg-white lg:mb-5'>
                                <div className='w-full flex gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={"20px"} viewBox="0 0 448 512"><path fill="#2ed87b" d="M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>

                                    <h1 className='text-lg   bg-white  cursor-pointer text-black font-semibold'>عروض مصممه لك</h1>
                                </div>
                                <div className=' rounded-full bg-main cursor-pointer'>
                                    <svg className=' transform rotate-90 transition-all duration-200 lg:hidden' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f7f7f7"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>

                                </div>


                            </div>


                            <div
                                ref={contentRef}
                                className='w-full overflow-hidden  transition-height duration-200  bg-white max-h-0 lg:max-h-full lg:p-2 '>

                                <Left_section_Copones_posts />

                            </div>


                        </div>

                        <div
                            onClick={() => { toggleHeight1(contentRef2) }}
                            className=''>

                            <div className='w-full p-3  flex items-center justify-between bg-white lg:mb-5'>
                                <div className='w-full flex gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22px" viewBox="0 0 576 512"><path fill="#2ed87b" d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0L109.6 0C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9c0 0 0 0-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3L448 384l-320 0 0-133.4c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3L64 384l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64 0-131.4c-4 1-8 1.8-12.3 2.3z" /></svg>

                                    <h1 className='text-lg   bg-white  cursor-pointer text-black font-semibold'>متاجر مشابهه</h1>

                                </div>

                                <div className=' rounded-full bg-main cursor-pointer'>
                                    <svg className=' transform rotate-90 lg:hidden' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f7f7f7"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>

                                </div>


                            </div>

                            <div
                                ref={contentRef2}
                                className='  overflow-hidden bg-white transition-height duration-200 max-h-0 lg:max-h-full lg:p-2  ' >
                                <Left_section_market />

                            </div>
                        </div>



                    </div>

                    <div className='w-full lg:col-span-3'>
                        <div ref={gide_more}>

                        </div>
                        <Store_post />
                    </div>


                </div>



            </div>

        </section>
    )
}
