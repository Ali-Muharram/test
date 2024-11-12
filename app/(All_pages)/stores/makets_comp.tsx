"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image'
import Link from 'next/link';

export default function Markets_comp() {
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])

    let vocabs: string[] = ['أ', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'هـ', 'و', 'ي']

    const scroll = (pos) => {
        itemRefs.current[pos].scrollIntoView({ behavior: 'smooth' });
    }
    
    return (
        <>
            { /* -------------------------------------------------------------------------- */
              /*                                    head                                    */
              /* -------------------------------------------------------------------------- */}
            <section className='w-full flex mb-7 flex-wrap bg-white gap-4 font-bold mt-5 p-5'>

                {vocabs.map((vocab, index) => (
                    < div
                        className='hover:text-main cursor-pointer text-md '
                        key={index}
                        onClick={() => { scroll(index) }}
                    >
                        {vocab}

                    </div>
                ))}
            </section>


            {/* -------------------------------------------------------------------------- */
             /*                                   markets                                  */
            /* --------------------------------------------------------------------------  */}

            <section className='w-full  flex flex-col gap-5 '>
                {vocabs.map((vocab, index) => (
                    <div
                        ref={(el) => {
                            itemRefs.current[index] = el; // تعيين المرجع
                        }} // تعيين المرجع بشكل صحيح

                    >
                        <Contener_markets key={index} vocab={vocab} >
                            {
                                Array.from({ length: 6 }, (_, index) => (
                                    <Link href={"stores/8"}>
                                        <Market_contect
                                            title={"شي ان"}
                                            desc={" تخفيض يتراوح ما بين 5% - 10%"}
                                            coupon_number={"50"}
                                            img={"/img/SHE.png"}
                                        />
                                    </Link>
                                ))
                            }
                        </Contener_markets>
                    </div>

                ))}
            </section>
        </>
    )
}


/* -------------------------------------------------------------------------- */
/*                              contener_markets                              */
/* -------------------------------------------------------------------------- */


function Contener_markets({ children, vocab }) {
    return (
        <div className=''>
            <div className='w-full border border-gray-300 border-x-0 border-t-0 pb-2 '>
                <p className='text-2xl text-main font-bold '>{vocab}</p>
            </div>
            <div className='w-full grid grid-cols-2 items-center justify-center gap-3 mt-5 md:justify-start md:flex md:flex-wrap '>
                {children}
            </div>

        </div>
    )
}

/* -------------------------------------------------------------------------- */
/*                               Market_contect                               */
/* -------------------------------------------------------------------------- */
function Market_contect({ title, desc, coupon_number, img }) {
    return (
        <div className='flex flex-col gap-2 cursor-pointer'>
            <div className='bg-white relative p-5 h-[150px] flex flex-col items-center justify-center '>
                <Image
                    src={img}
                    alt='coupones_market'
                    width={70}
                    height={70}
                    layout='fixed'
                    className='h-full object-contain'
                />
                <p className='text-[#97a4ad]  text-center text-xs'>
                    {desc}
                </p>


                <h3 style={{
                    transition: 'opacity 0.45s ease-in-out',
                    WebkitTransition: 'opacity 0.45s ease-in-out', // Safari
                    MozTransition: 'opacity 0.45s ease-in-out',    // Firefox
                    msTransition: 'opacity 0.45s ease-in-out',     // Internet Explorer
                }} className=' transition-opacity duration-750 opacity-0 hover:opacity-100 absolute bg-[#99d038] h-full w-full text-center flex items-center justify-center text-white text-2xl '>
                    عدد الكوبونات {coupon_number}
                </h3>
            </div>
            <div className='w-full bg-white text-center flex flex-col gap-2 p-2'>
                <p className='text-gray-900 font-semibold text-center text-sm hover:text-main'>
                    {title}
                </p>



            </div>
        </div>
    )
}
