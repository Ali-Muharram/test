"use client"

import React, { useRef, useState, useEffect } from 'react'
import Navigator from '../../_components/navigator/navigator'
import Image from 'next/image'
import Copones from '../../_components/copones/Copones'

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
    return (
        <>

            <Navigator title={"كوبونات وعروض"} target={" /  كوبونات وعروض"} />
            <section className='h-full w-full  mt-5 grid  grid- gap-5 lg:grid-cols-4'>

                <section className='w-full order-2 h-fit lg:col-span-3 grid grid-cols-1 gap-5 lg:order-1 '>

                    <Copones />
                    <Copones />
                    <Copones />
                    <Copones />
                    <Copones />
                    <Copones />
                    <Copones />
                    <Copones />
                    <Copones />
                    <Copones />
                </section>




                <div className=' w-full order-1 flex flex-col gap-5 lg:order-2    '>
                    {/* <Search /> */}

                    <div
                        onClick={() => { toggleHeight1(contentRef2) }}
                        className=''>

                        <div className='w-full p-3 mb-5 flex items-center justify-between bg-white'>
                            <div className='w-full flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={"20px"} viewBox="0 0 448 512"><path fill="#2ed87b" d="M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>

                                <h1 className='text-lg   bg-white  cursor-pointer text-black font-semibold'>اقوى الصفقات</h1>

                            </div>

                            <div className=' rounded-full bg-main cursor-pointer'>
                                <svg className=' transform rotate-90 lg:hidden' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f7f7f7"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>

                            </div>


                        </div>

                        <div
                            ref={contentRef2}
                            className='  overflow-hidden bg-white transition-height duration-200 max-h-0 lg:max-h-full lg:p-2  ' >
                            <Copones_posts />

                        </div>
                    </div>

                    <div
                        onClick={() => { toggleHeight1(contentRef) }}
                        className='  '>

                        <div className='w-full p-3 mb-5 flex items-center justify-between bg-white'>
                            <div className='w-full flex gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22px" viewBox="0 0 576 512"><path fill="#2ed87b" d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0L109.6 0C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9c0 0 0 0-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3L448 384l-320 0 0-133.4c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3L64 384l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64 0-131.4c-4 1-8 1.8-12.3 2.3z" /></svg>
                                <h1 className='text-lg   bg-white  cursor-pointer text-black font-semibold'>اشهر المتاجر</h1>
                            </div>
                            <div className=' rounded-full bg-main cursor-pointer'>
                                <svg className=' transform rotate-90 transition-all duration-200 lg:hidden' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f7f7f7"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>

                            </div>


                        </div>



                        <div
                            ref={contentRef}
                            className='w-full overflow-hidden  transition-height duration-200  bg-white max-h-0 lg:max-h-full lg:p-2 '>

                            <More_markts />

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}


/* -------------------------------------------------------------------------- */
/*                                   coupons                                  */
/* -------------------------------------------------------------------------- */

function Coupons_all() {
    return (

        <section className="w-full  flex flex-col p-4 bg-white  gap-2 md:gap-4 justify-between md:flex-row  ">
            {/*  ---------------------------------- right ---------------------------------- */}

            <div className="flex w-full text-center items-center justify-between gap-2   md:hidden">
                <div className="text-[#aaa]    text-[10px]   gap-1 flex items-center justify-start ">
                    <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="#2ed87b"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" /></svg>

                    كوبون فعال

                </div>

                <div className="flex  gap-1 text-[10px]   items-center text-[#aaa] justify-c">
                    <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="#2ed87b"><path d="M696.23-384Q656-384 628-411.77q-28-27.78-28-68Q600-520 627.77-548q27.78-28 68-28Q736-576 764-548.23q28 27.78 28 68Q792-440 764.23-412q-27.78 28-68 28ZM528-192v-53q0-11.08 4-20.54 4-9.46 12-16.46 32-27 71-40.5t81-13.5q42 0 81 13.5t71 40.5q8 7 12 16.46t4 20.54v53H528ZM384-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42Zm0-144ZM96-192v-92q0-25.78 12.5-47.39T143-366q55-32 116.21-49 61.21-17 124.79-17 52 0 102.5 11.5T585-387q-23 7-43 19t-39 26q-29-8-59-13t-60-5q-54.22 0-106.11 14T179-304q-5 3-8 8.28-3 5.27-3 11.72v20h288v72H96Zm288-72Zm.21-288Q414-552 435-573.21t21-51Q456-654 434.79-675t-51-21Q354-696 333-674.79t-21 51Q312-594 333.21-573t51 21Z" /></svg>

                    مستخدم من قبل 10

                </div>

                <div className="flex gap-1 text-[10px]   items-center text-[#aaa] justify-end">
                    <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="#2ed87b"><path d="m614-310 51-51-149-149v-210h-72v240l170 170ZM480-96q-79.38 0-149.19-30T208.5-208.5Q156-261 126-330.96t-30-149.5Q96-560 126-630q30-70 82.5-122t122.46-82q69.96-30 149.5-30t149.55 30.24q70 30.24 121.79 82.08 51.78 51.84 81.99 121.92Q864-559.68 864-480q0 79.38-30 149.19T752-208.5Q700-156 629.87-126T480-96Zm0-384Zm.48 312q129.47 0 220.5-91.5Q792-351 792-480.48q0-129.47-91.02-220.5Q609.95-792 480.48-792 351-792 259.5-700.98 168-609.95 168-480.48 168-351 259.5-259.5T480.48-168Z" /></svg>

                    اخر استخدام من 1 ساعه

                </div>


            </div>

            <div className=" flex   items-center justify-center border  border-black/25 p-2">



                <Image
                    className="h-fit"
                    src={
                        "https://d1fxr6qy94trui.cloudfront.net/sites/default/files/styles/merchant_logo/public/store_icon/carrefour_promo_code.png"

                    }
                    alt=""
                    width={150}
                    height={93}
                // layout='fixed'
                />


            </div>

            {/*  ---------------------------------- middle ---------------------------------- */}

            <div className="flex-middle  gap-2 w-full flex-1  justify-between flex-col ">
                <div className="w-full flex ">
                    <div className="text-[#aaa] text-xs hidden w-full  items-center  md:flex">
                        <svg xmlns="http://www.w3.org/2000/svg" height="19px" viewBox="0 -960 960 960" width="24px" fill="#2ed87b"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" /></svg>

                        كوبون فعال

                    </div>
                    <div className="text-[#aaa] text-xs hidden w-full gap-1  items-center  md:flex">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#2ed87b"><path d="M696.23-384Q656-384 628-411.77q-28-27.78-28-68Q600-520 627.77-548q27.78-28 68-28Q736-576 764-548.23q28 27.78 28 68Q792-440 764.23-412q-27.78 28-68 28ZM528-192v-53q0-11.08 4-20.54 4-9.46 12-16.46 32-27 71-40.5t81-13.5q42 0 81 13.5t71 40.5q8 7 12 16.46t4 20.54v53H528ZM384-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42Zm0-144ZM96-192v-92q0-25.78 12.5-47.39T143-366q55-32 116.21-49 61.21-17 124.79-17 52 0 102.5 11.5T585-387q-23 7-43 19t-39 26q-29-8-59-13t-60-5q-54.22 0-106.11 14T179-304q-5 3-8 8.28-3 5.27-3 11.72v20h288v72H96Zm288-72Zm.21-288Q414-552 435-573.21t21-51Q456-654 434.79-675t-51-21Q354-696 333-674.79t-21 51Q312-594 333.21-573t51 21Z" /></svg>

                        مستخدم من قبل 10

                    </div>

                </div>

                <h1 className=" mt-2 md:mt-4 font-semibold text-[#272727] ">
                    5% كوبون خصم نون مصر 2024 | عروض نون لغاية 25 جنيه
                </h1>

                <p

                    className=" mt-2  md:mt-4 text-sm text-[#7a7a7a] line-clamp-2  text-justify md:w-[75%]">
                    إذا كنت تبحث عن أقوى كود خصم نون جمهورية مصر 2024، فأنت في المكان الصحيح! انسخ كود خصم نون التالي: "ALC" للحصول على خصومات فورية بقيمة 10% تصل إلى 50 جنيه مصري على كافة المنتجات. موقع Noon.com هو أحد المواقع الرائدة عبر الإنترنت في الشرق الأوسط وقد اكتسب شعبية هائلة بسبب توفير مجموعة واسعة من المنتجات والتخفيضات المذهلة. وخلال عروض نون 2024 السنوية، يقدم الموقع بعضًا من أكبر الخصومات والعروض على فئات مختلفة مثل الجوالات و الإلكترونيات والأزياء والجمال والأجهزة المنزلية والمزيد.

                    ولكن مع توفر الكثير من كوبونات الخصم والعروض المنتشرة خلال موسم التخفيضات، قد يكون العثور على أفضل قسيمة خصم أمرًا صعبًا للغاية. وهنا يأتي  كود خصم نون المقدم حصريا من موقع الكوبون: "ALC". باستخدام هذا الكوبون الحصري، يمكنك توفير الكثير من المال!! فلماذا الانتظار؟ ابدأ بالتسوق!!
                </p>


            </div>

            {/*  ---------------------------------- left ---------------------------------- */}
            <div className="flex-right flex gap-4 w-full  flex-col  md:w-fit md:gap-0 ">
                <div className=" hidden text-xs gap-1 items-center text-[#aaa] md:flex">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#2ed87b"><path d="m614-310 51-51-149-149v-210h-72v240l170 170ZM480-96q-79.38 0-149.19-30T208.5-208.5Q156-261 126-330.96t-30-149.5Q96-560 126-630q30-70 82.5-122t122.46-82q69.96-30 149.5-30t149.55 30.24q70 30.24 121.79 82.08 51.78 51.84 81.99 121.92Q864-559.68 864-480q0 79.38-30 149.19T752-208.5Q700-156 629.87-126T480-96Zm0-384Zm.48 312q129.47 0 220.5-91.5Q792-351 792-480.48q0-129.47-91.02-220.5Q609.95-792 480.48-792 351-792 259.5-700.98 168-609.95 168-480.48 168-351 259.5-259.5T480.48-168Z" /></svg>

                    اخر استخدام من 1 ساعه

                </div>
                <section className="h-full w-full gap-1 flex items-center justify-center mt-2  md:mt-3 ">
                    <div

                        className='relative w-full  rounded-full cursor-pointer   z-20  transition-all duration-300  border-[#2ed87b]  border-2 hover:border-[#2ed87b] md:flex  '>
                        <p className='flex px-4 py-2 pointer-events-none'>ghghhhhhgh</p>
                        <div className=' rounded-full text-sm p-2 font-[400] top-0 left-0 w-full items-center  transition-all duration-300 justify-center bg-gray-100 text-gray-900 h-full  flex text-nowrap absolute hover:text-white hover:bg-[#2ed87b] hover:w-[80%] '>
                            GET CODE
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#aaa"><path d="M648-96q-50 0-85-35t-35-85q0-9 4-29L295-390q-16 14-36.05 22-20.04 8-42.95 8-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 43 8t36 22l237-145q-2-7-3-13.81-1-6.81-1-15.19 0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-43-8t-36-22L332-509q2 7 3 13.81 1 6.81 1 15.19 0 8.38-1 15.19-1 6.81-3 13.81l237 145q16-14 36.05-22 20.04-8 42.95-8 50 0 85 35t35 85q0 50-35 85t-85 35Zm0-72q20.4 0 34.2-13.8Q696-195.6 696-216q0-20.4-13.8-34.2Q668.4-264 648-264q-20.4 0-34.2 13.8Q600-236.4 600-216q0 20.4 13.8 34.2Q627.6-168 648-168ZM216-432q20.4 0 34.2-13.8Q264-459.6 264-480q0-20.4-13.8-34.2Q236.4-528 216-528q-20.4 0-34.2 13.8Q168-500.4 168-480q0 20.4 13.8 34.2Q195.6-432 216-432Zm432-264q20.4 0 34.2-13.8Q696-723.6 696-744q0-20.4-13.8-34.2Q668.4-792 648-792q-20.4 0-34.2 13.8Q600-764.4 600-744q0 20.4 13.8 34.2Q627.6-696 648-696Zm0 480ZM216-480Zm432-264Z" /></svg>


                </section>


            </div>
        </section>

    )
}



/* -------------------------------------------------------------------------- */
/*                                   search                                   */
/* -------------------------------------------------------------------------- */

function Search() {

    return (
        <section className='bg-white p-5 w-full'>
            <div className='w-full flex p-2 bg-[#f2f2f2]'>
                <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#282828"><path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z" /></svg>
                <input className='w-full bg-[#f2f2f2] outline-none  px-2' type="text" placeholder='البحث عن ......' />
            </div>

        </section>
    )
}



/* -------------------------------------------------------------------------- */
/*                                copones_posts                               */
/* -------------------------------------------------------------------------- */

function Copones_posts() {
    return (
        <section className='w-full   '>

            <div className='w-full flex  flex-col bg-white gap-3 '>
                <Copones_posts_item
                    title={" رقم طيران اديل ووسائل الاتصال المتاحة مع طرق الحجز بخصم 65%"}
                    img={"https://preview.itgeeksin.com/blackfriday/assets/img/blog/blog2.jpg"}
                />
                <Copones_posts_item
                    title={" رقم طيران اديل ووسائل الاتصال المتاحة مع طرق الحجز بخصم 65%"}
                    img={"https://preview.itgeeksin.com/blackfriday/assets/img/blog/blog2.jpg"}
                />
                <Copones_posts_item
                    title={" رقم طيران اديل ووسائل الاتصال المتاحة مع طرق الحجز بخصم 65%"}
                    img={"https://preview.itgeeksin.com/blackfriday/assets/img/blog/blog2.jpg"}
                />
                <Copones_posts_item
                    title={" رقم طيران اديل ووسائل الاتصال المتاحة مع طرق الحجز بخصم 65%"}
                    img={"https://preview.itgeeksin.com/blackfriday/assets/img/blog/blog2.jpg"}
                />
                <Copones_posts_item
                    title={" رقم طيران اديل ووسائل الاتصال المتاحة مع طرق الحجز بخصم 65%"}
                    img={"https://preview.itgeeksin.com/blackfriday/assets/img/blog/blog2.jpg"}
                />
            </div>


        </section >
    )
}

function Copones_posts_item({ title, img }) {
    return (
        <section className='w-full flex  gap-3 items-center'>
            <Image
                src={img}
                alt='coupons'
                width={50}
                height={50}
                layout='fixed'
            />
            <div className='w-full flex flex-col gap-2'>
                <h1 className='text-md lg:text-xs'>
                    {title}
                </h1>
                <p className='text-main cursor-pointer border text-xs border-main border-x-0 border-t-0 w-fit'>
                    قراءة المزيد
                </p>
            </div>

        </section>
    )
}



/* -------------------------------------------------------------------------- */
/*                                more markets                                */
/* -------------------------------------------------------------------------- */

function More_markts() {
    return (
        <section className=' h-full w-full grid grid-cols-3 md:grid-cols-6 gap-3 lg:grid-cols-3   '>
            {Array.from({ length: 51 }).map((_, index) => (
                <Image className='bg-gray-100 cursor-pointer w-full p-2'

                    src="/img/SHE.png"
                    alt=""
                    width={100}
                    height={40}
                    layout="responsive"
                />

            ))}
        </section >
    )
}