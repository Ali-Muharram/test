"use client"
import Image from "next/image";
import React, { useRef, useState } from "react";

export default function Copones({ coponeData }) {
    const ref = useRef(null)
    const [is3line, setis3line] = useState<boolean>(true)


    const toggle_read_more = () => {
        ref.current.classList.toggle("line-clamp-3")
        setis3line(ref.current.classList.contains('line-clamp-3'))
    }

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

                    مستخدم من قبل {coponeData.UsageNamber}

                </div>

                <div className="flex gap-1 text-[10px]   items-center text-[#aaa] justify-end">
                    <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="#2ed87b"><path d="m614-310 51-51-149-149v-210h-72v240l170 170ZM480-96q-79.38 0-149.19-30T208.5-208.5Q156-261 126-330.96t-30-149.5Q96-560 126-630q30-70 82.5-122t122.46-82q69.96-30 149.5-30t149.55 30.24q70 30.24 121.79 82.08 51.78 51.84 81.99 121.92Q864-559.68 864-480q0 79.38-30 149.19T752-208.5Q700-156 629.87-126T480-96Zm0-384Zm.48 312q129.47 0 220.5-91.5Q792-351 792-480.48q0-129.47-91.02-220.5Q609.95-792 480.48-792 351-792 259.5-700.98 168-609.95 168-480.48 168-351 259.5-259.5T480.48-168Z" /></svg>

                    اخر استخدام من{coponeData.LastTimeUsage}  ساعه

                </div>


            </div>

            <div className=" flex   items-center justify-center border  border-black/25 p-2">



                <Image
                    className="h-fit"
                    src={`${process.env.NEXT_PUBLIC_API_HOST}uploads/Shops/${coponeData.CouponePhoto}`}

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

                        مستخدم من قبل {coponeData.UsageNamber}

                    </div>

                </div>

                <h1 className=" mt-2 md:mt-4 font-semibold text-[#272727] ">
                    {coponeData.title}
                </h1>
                <div className="md:flex items-end transition-all duration-300 ">
                    <p
                        ref={ref}
                        className=" mt-2  md:mt-4 text-sm text-[#7a7a7a] line-clamp-2  text-justify md:w-[75%]">
                        {coponeData.limitContent}
                    </p>
                    <p
                        //onClick={toggle_read_more}
                        className="text-[#2ed87b] text-xs cursor-pointer">
                        {is3line ? "قراءة المزيد" : "اقل"}
                    </p>
                </div>

            </div>

            {/*  ---------------------------------- left ---------------------------------- */}
            <div className="flex-right flex gap-4 w-full  flex-col  md:w-fit md:gap-0 ">
                <div className=" hidden text-xs gap-1 items-center text-[#aaa] md:flex">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#2ed87b"><path d="m614-310 51-51-149-149v-210h-72v240l170 170ZM480-96q-79.38 0-149.19-30T208.5-208.5Q156-261 126-330.96t-30-149.5Q96-560 126-630q30-70 82.5-122t122.46-82q69.96-30 149.5-30t149.55 30.24q70 30.24 121.79 82.08 51.78 51.84 81.99 121.92Q864-559.68 864-480q0 79.38-30 149.19T752-208.5Q700-156 629.87-126T480-96Zm0-384Zm.48 312q129.47 0 220.5-91.5Q792-351 792-480.48q0-129.47-91.02-220.5Q609.95-792 480.48-792 351-792 259.5-700.98 168-609.95 168-480.48 168-351 259.5-259.5T480.48-168Z" /></svg>

                    اخر استخدام من {coponeData.LastTimeUsage}  ساعه

                </div>
                <section className="h-full w-full gap-3 flex items-center justify-center mt-2  md:mt-3 ">
                    <div

                        className='relative w-full  rounded-full cursor-pointer   z-20  transition-all duration-300  border-[#2ed87b]  border-2 hover:border-[#2ed87b] md:flex  '>
                        <p className='flex px-4 py-2 pointer-events-none'>{coponeData.coupon}</p>
                        <div className=' rounded-full text-sm p-2 font-[400] top-0 left-0 w-full items-center  transition-all duration-300 justify-center bg-gray-100 text-gray-900 h-full  flex text-nowrap absolute hover:text-white hover:bg-[#2ed87b] hover:w-[80%] '>
                            GET CODE
                        </div>
                    </div>


                </section>


            </div>
        </section>
    );
}

