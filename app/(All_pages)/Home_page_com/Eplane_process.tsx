import Image from 'next/image'
import React from 'react'

export default function Eplane_process() {
    return (
        <section className='w-full grid  grid-cols-1  items-center justify-center gap-5  lg:grid-cols-1 md:grid-cols-2'>
            <Explane img={"/img/tablet.png"} title={"عروض وقسائم"} desc={"تعتبر العروض والقسائم وسيلة رائعة للتوفير عند التسوق. تقدم المتاجر مجموعة متنوعة من العروض، "} />
            <Explane img={"/img/online-shop-6.png"} title={"ابحث عن أفضل العروض"} desc={"اكتشف عروض مذهلة وخصومات مصممة خصيصًا لك! تتيح لك منصتنا استكشاف مجموعة واسعة من أفضل العروض المتاحة    "} />
            <div className='md:col-span-2 lg:col-span-1'>
                <Explane img={"/img/money.png"} title={"وفر المال"} desc={"تعلّم كيفية تقليل نفقاتك وزيادة مدخراتك! من خلال التخطيط الذكي للتسوق واستخدام العروض والخصومات،  "} />
            </div>

        </section>
    )
}


function Explane({ img, title, desc }) {

    return (
        <div className='bg-white flex-1 flex-col gap-1  h-full px-3 py-5 flex items-center'>
            <Image
                src={img}
                alt='tablet'
                width={80}
                height={80}
                // style={{ objectFit: 'contain' }}
                layout='fixed'
            />
            <div className='flex gap-3 flex-col'>
                <h4 className='text-[#384047] w-full text-center'>{title}</h4>
                <p className='text-[#717f86] overflow-hidden text-xs w-full text-center '>{desc}</p>
            </div>
        </div>
    )
}
