import React from 'react'
import Image from 'next/image'

export default function Left_section_market() {
    return (
        <section className=' w-full grid grid-cols-3 md:grid-cols-3 gap-3 lg:grid-cols-3   '>
            {Array.from({ length: 18 }).map((_, index) => (
                <Image className='bg-gray-100 cursor-pointer  w-full p-5 md:p-8 lg:p-2'
                    key={index} // يجب إضافة مفتاح فريد لكل عنصر في القائمة
                    src="/img/SHE.png"
                    alt=""
                    width={100}
                    height={40}
                />
            ))}

        </section >
    )
}
