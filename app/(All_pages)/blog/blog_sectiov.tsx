import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Blog_sectiov() {
    return (
        <section className='bg-white flex flex-col cursor-pointer md:flex-row '>
           
                <Image
                    src={"https://preview.itgeeksin.com/blackfriday/assets/img/all/image7.jpg"}
                    alt=''
                    width={300}
                    height={300}
                    layout='responsive'
                />
            

            <div className='p-4 flex flex-col gap-5 '>
                <Link href={"/blog/f"}>
                    <h1 className='text-[#262626] hover:text-[#2ed87b] transition-all duration-300 font-semibold'>كيفية ادخال الكوبون بشكل صحيح</h1>
                </Link>
                <div className='flex items-center gap-4 text-xs text-[#777777]'>
                    <div className='flex  items-center gap-2'>
                        <svg className='' xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 448 512"><path fill="#777777" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg>
                        <p className=' transition-all duration-300'>كتب بواسطة : خصم الان</p>
                    </div>
                    <div className='flex  items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#777777"><path d="M216-96q-29.7 0-50.85-21.5Q144-139 144-168v-528q0-29 21.15-50.5T216-768h72v-96h72v96h240v-96h72v96h72q29.7 0 50.85 21.5Q816-725 816-696v528q0 29-21.15 50.5T744-96H216Zm0-72h528v-360H216v360Zm0-432h528v-96H216v96Zm0 0v-96 96Z" /></svg>
                        <p className=''> 24 اكتوبر  2024</p>
                    </div>

                </div>
                <div className='w-full flex  flex-col text-justify   text-[#777777]'>
                    <p className='line-clamp-3'>
                        نصيحة من موقع الكوبون: لجميع عملائنا من جمهورية مصر ننصحكم بقراءة هذا الشرح قبل البدء بالشراء للتمتع برحلة تسوق إلكترونية سلسة وموفرة.

                        تأكد من كتابة أو لصق رمز الكوبون بشكل صحيح. معظم الرموز تكون بالأحرف الكبيرة باللغة الإنجليزية (Capital Letters)، وبعضها حساسة لحالة الأحرف، وبالتالي قد لا تعمل إذا قمت بإدخالها في أحرف صغيرة. إذا قمت بنسخ كود الخصم من موقع الكوبون  ولصقها، فتأكد من عدم وجود مسافات فارغة قبل أو بعد ذلك والذي قد يؤدي إلى ظهور رسالة خطأ.

                    </p>
                    <div className='w-full flex items-center justify-end '>
                        <Link href={"/blog/f"} className="text-[#777] mt-5  hover:text-[#2ed87b] transition-all duration-300 cursor-pointer"> قرائه المزيد </Link>

                    </div>


                </div>

            </div>

        </section >
    )
}
