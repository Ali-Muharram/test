import React from 'react'
import Copones from '../../_components/copones/Copones'
import Link from 'next/link'

export default function Copone_section({ CouponesData }) {
    return (
        <section className='w-full gap-5  h-full flex flex-col justify-center'>

            < div className='w-full  flex  border border-[#2ed87b] border-y-0 border-l-0 bg-white justify-between items-center  p-4 ' >
                <div className='flex w-full gap-2 justify-between items-center'>
                    <div className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={"22px"} viewBox="0 0 448 512"><path fill="#2ed87b" d="M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>
                        <h4 className='font-[600] text-lg'>  احدث الكوبونات والعروض</h4>
                    </div>
                    <Link href={"/coupons-list"} passHref aria-label="Browse coupons " className='flex items-center gap-1 cursor-pointer '>
                        {/* <p className='hover:text-[#fff] text-sm hover:bg-[#2ed87b] p-2 rounded transition-all duration-200   font-semibold '>
                            الكل

                        </p> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="22px" viewBox="0 0 512 512"><path fill="#2ed87b" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" /></svg>

                    </Link>

                </div>

            </div >

            <div className='flex flex-col gap-5 justify-between  h-full'>
                {CouponesData.map((copone, index) => (
                    <div key={copone.id}>
                        <Copones coponeData={copone} />
                    </div>

                ))}



            </div>

        </section >

    )
}
