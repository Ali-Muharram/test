
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Markets({ ShopsData }) {
    return (
        <section className='w-full gap-5 h-full flex flex-col justify-center '>
            <div className='w-full flex border border-[#2ed87b] border-y-0 border-l-0 bg-white justify-between items-center  p-4 '>

                <div className='flex gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22px" viewBox="0 0 576 512"><path fill="#2ed87b" d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0L109.6 0C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9c0 0 0 0-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3L448 384l-320 0 0-133.4c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3L64 384l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64 0-131.4c-4 1-8 1.8-12.3 2.3z" /></svg>
                    <h4 className='font-[600] text-lg'> المتاجر المميزه</h4>
                </div>

                <Link href={"/stores"} className='flex items-center gap-2 cursor-pointer '>
                    {/* <p className='hover:text-[#fff] text-sm hover:bg-[#2ed87b] p-2 rounded transition-all duration-200   font-semibold '>
                        كل المتاجر 

                    </p> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="22px" viewBox="0 0 512 512"><path fill="#2ed87b" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" /></svg>

                </Link >

            </div>

            <div className='w-full gap-5  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center '>
                {ShopsData.map((item, index) => (
                    <div className='h-full' key={item.id}>
                        <Markets_comp
                            name={item.NameShop}
                            KhasmValue={item.KhasmValue}
                            img={`${process.env.API_HOST}uploads/Shops/${item.PhotoShop}`}
                            CategoryType={item.CategoryType}
                            countcoupons={item.countcoupons}
                        />
                    </div>

                ))}



            </div>

        </section>
    )
}



function Markets_comp({ img, KhasmValue, name, CategoryType, countcoupons }) {
    return (
        <section className='bg-white h-full  gap-3 flex cursor-pointer relative flex-col items-center justify-center p-5'>
            <div className='top-0 w-[80px] h-[85px] overflow-hidden right-0  items-center justify-center flex transform text-xs absolute  '>
                <div className='rotate-45 flex items-center justify-center  text-center px-1 pb-[1.5px] h-fit w-full relative left-4 -top-5 bg-[#ff3100] text-white'>
                    {CategoryType}
                </div>
            </div>
            <Image
                src={img}
                alt={img}
                width={115}
                height={100}
                layout='fixed'
            />
            <p className='text-[#97a4ad] text-center text-xs'>
                {KhasmValue}
            </p>
            <p className='text-gray-900 font-semibold text-center text-xs'>
                {name}
            </p>

            <h3 style={{
                transition: 'opacity 0.45s ease-in-out',
                WebkitTransition: 'opacity 0.45s ease-in-out', // Safari
                MozTransition: 'opacity 0.45s ease-in-out',    // Firefox
                msTransition: 'opacity 0.45s ease-in-out',     // Internet Explorer
            }} className=' transition-opacity duration-750 opacity-0 hover:opacity-100 absolute bg-[#99d038] h-full w-full text-center flex items-center justify-center text-white text-2xl '>
                عدد الكوبونات {countcoupons}
            </h3>
        </section>
    )
}