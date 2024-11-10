import React from 'react'
import Image from 'next/image'

export default function Copones_posts() {
    return (
        <section className='w-full   '>
            <div className='w-full flex p-2 flex-col bg-white gap-3 '>
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
