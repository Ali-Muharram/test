import Image from 'next/image'
import React from 'react'
import Store_header_buuton from './srore_header_buuton'

export default function Store_header({ gide_more }) {
    return (
        <section className='w-full h-full grid grid-cols-1 gap-5 items-center lg:grid-cols-4  '>
            <div className='lg:col-span-3 h-full '> <Header_section_right gide_more={gide_more} /> </div>
            <div className='lg:col-span-1 h-full '><Header_section_lift /></div>
        </section>
    )
}



function Header_section_right({ gide_more }) {
    return (
        <section className='w-full h-fit bg-white p-5 gap-3 grid lg:grid-cols-4 '>
            <div className=' border  flex items-center justify-center h-full p-5 lg:col-span-1'>
                <Image
                    src={"/img/SHE.png"}
                    alt='store'
                    width={150}
                    height={150}

                />
            </div>

            <div className='w-full  flex flex-col gap-3 lg:col-span-3  '>
                <h1 className='font-semibold text-[20px] hover:text-main cursor-pointer'>كود خصم شي ان 2024 الذهبي كوبون 80 % حتى 90 % ٢٠٢٤ shein ksa اليوم</h1>
                <p className='text-[#354047] leading-6 text-sm line-clamp-3 h-full '>كود خصم شي ان  2024 المتاح من على موقع الكوبون الذهبي على كافة

                    منتجات متجر shein arabic حيث يوفر لكم باقة من المنتجات التي تتناسب مع

                    كل أفراد الأسرة، دعونا نتناول كافة التفاصيل حول</p>
                <Store_header_buuton gide_more={gide_more} />

            </div>


        </section>
    )
}


function Header_section_lift() {
    return (
        <section className='bg-white w-full h-full flex flex-col p-5 gap-3 items-center '>
            <Image
                src={"/img/SHE.png"}
                alt='store'
                width={100}
                height={100}

            />
            <h2 className='text-gray-900  text-xs  mt-2 '>تخفيض يتراوح ما بين 5% - 10%</h2>
            {/* <ul className='w-full text-xs list-disc px-5 text-[#354047] '>
                <li>متجر مميز</li>
                <li>متجر شائع</li>
                <li>متجر كبير</li>
                <li>متجر شامل</li>
                <li>متجر مصري</li>
            </ul> */}
            <div className='w-full flex flex-col items-center justify-between gap-2 text-center'>
            <button className='  w-full font-semibold text-gray-800   py-2 px-4 rounded '>لاتنسي نسخ الكوبون</button>

                <button className='text-white text-xs w-[75%]  bg-main py-2 px-4 rounded '>الانتقال الي المتجر</button>

               
            </div>
        </section>
    )
}