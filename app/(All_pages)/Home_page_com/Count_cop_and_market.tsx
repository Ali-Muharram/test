import React from 'react'

export default function Count_cop_and_market() {
    return (
        <section className='w-full p-3 rounded-md bg-white gap-2  justify-between flex items-center border-black/10'>
            <div className='w-full flex flex-col items-center justify-start gap-2 '>
                <h3 className=' text-[#484848] font-semibold w-full text-center text-sm'> عدد الكوبونات</h3>
                <div className='rounded-sm border w-full p-1 flex text-center items-center justify-center border-black/10'>150</div>
            </div>
            <div className='w-full flex flex-col items-center justify-start gap-2 '>
                <h3 className=' text-[#484848] font-semibold w-full text-center text-sm'>عدد المتاجر</h3>
                <div className='rounded-sm border w-full p-1 flex text-center items-center justify-center border-black/10'>150</div>

            </div>
        </section>
    )
}
