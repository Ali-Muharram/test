import Image from 'next/image'
import React from 'react'

export default function Comments() {
    return (
        <section className='w-full flex flex-col gap-3 h-full '>
            < div className='w-full flex bg-white border border-[#2ed87b] border-y-0 border-l-0 justify-between items-center  p-2 ' >
                <div className='flex gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width={"20px"} viewBox="0 0 512 512"><path  fill="#2ed87b" d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg>
                    <h4 className='font-[600] text-lg'> التقييمات</h4>

                </div>

            </div >
            <div className='grid grid-cols-1  gap-4  bg-white  h-fit md:grid-cols-2 lg:grid-cols-1'>
                <Cooment />
                <Cooment />


            </div>





        </section>


    )
}



function Cooment() {
    return (
        <section className='w-full flex p-5 rounded-md bg-white gap-2       border-black/10'>
            <div className='h-fit'>
                <Image
                    src={"https://friday-theme.firebaseapp.com/assets/images/avatars/avatar_01.jpg"}
                    alt='photo'
                    width={50}
                    height={50}
                    layout='fixed'
                />
            </div>

            <div className='w-full bg-[#fbfbfb] flex flex-col items-start gap-1 border border-black/10 p-2 '>
                {/* <div className='rounded-full text-sm p-2 w-[25px] h-[25px] flex items-center justify-center text-white bg-green-700'>ا</div> */}

                <div className='flex flex-col gap-1  '>
                    <p className='text-gray-700 text-[14px] '>اسلام محمود</p>
                    <p className='text-[#9e9e9e] text-[12px]'>27/10/2024 at 1:08 AM </p>
                </div>
                <p className='text-[13px] text-[#384047]'>تجربة رائعة ماشاء الله حاجة جميلة</p>
            </div>

        </section>
    )
}