import React from 'react'
import Up_Footer from './Up_Footer'
import Image from 'next/image'
import Header_footer from './Header_footer'
import Link from 'next/link'

export default function Footer() {
  return (
    <>

      <Up_Footer />
      <section
        className='w-full flex flex-col justify-center items-center bg-[#314555]'>
        {/* ---------------------------------- [main] ---------------------------------- */}
        <div className='w-full     max-w-[1200px] flex flex-col items-center   '>
          <Header_footer />


          {/*  ------------------------------ [section links] -----------------------------  */}
          <div className=' px-2 py-9 w-full grid grid-cols-1 gap-14 justify-center  md:grid-cols-3   '>
            {/* section 1 */}
            <div className='gap-2 col-span-1  flex flex-col '>
              <a href="#">
                <Image
                  src="/logo.png" // مسار الصورة
                  alt="شعار Couponis" // نص بديل للصورة
                  width={150}
                  height={40}
                  layout="fixed" // استخدم "fixed" إذا كنت تريد أبعادًا ثابتة
                />
              </a>
              <p className='text-[#d4d4d4]  flex items-start'>
                Lorem Ipsum is simply dummy text
                of the printing and typesetting industry.
                Lorem Ipsum has been the industry's the
                standard dummy
              </p>



            </div>

            <div className=' grid-cols-1 col-span-2   w-full grid md:grid-cols-4'>



              <div className='flex gap-3 justify-start text-sm  flex-col text-[#d4d4d4]'>
                <h4 className='text-white text-lg  '>اشهر المتاجر</h4>
                <p><a href="#">كود خصم نون</a></p>
                <p><a href="#">كود خصم امازون</a></p>
                <p><a href="#">كود خصم علي بابا</a></p>
                <p><a href="#">كود خصم شي ان</a></p>
                <p><a href="#">كود خصم جوميا</a></p>
                <p><a href="#">كود خصم سوق</a></p>

              </div>
              <div className='flex flex-col gap-3 text-sm justify-start  text-[#d4d4d4]'>
                <h2 className='text-white  text-lg  mt-10 md:mt-0'>عروض المناسبات</h2>
                <p><a href="#">جميع المتاجر </a></p>
                <p><a href="#">الاعياد والعطلات </a></p>
                <p><a href="#">عروض الجمعه السوداء</a></p>
                <p><a href="#">عروض الجمعه البيضاء</a></p>
                <p><a href="#">عروض اليوم الوطني الاماراتي</a></p>
                <p><a href="#">عروض اليوم الوطني السعودي</a></p>
              </div>
              <div className='flex flex-col text-sm gap-3 justify-start  text-[#d4d4d4]'>
                <h4 className='text-white text-lg mt-10 md:mt-0 '>احدث الكوبونات</h4>
                <p><a href="#">كوبون خصم نون</a></p>
                <p><a href="#">كوبون خصم جوميا</a></p>
                <p><a href="#">كوبون خصم شي ان</a></p>
                <p><a href="#">كوبون خصم امازةن</a></p>
                <p><a href="#">كوبون خصم سوق</a></p>
                <p><a href="#">كوبون خصم على بابا</a></p>
              </div>
              <div className='flex flex-col gap-3 text-sm  justify-start  text-[#b7b7b7]'>
                <h4 className='text-white text-lg mt-10 md:mt-0 '>احدث المقالات</h4>
                <p><a href="#">مقال عن كوبون </a></p>
                <p><a href="#">مقال عن التفاح</a></p>
                <p><a href="#">مقال عن البرتقال</a></p>
                <p><a href="#">مقال عن البطيخ</a></p>
                <p><a href="#">مقال عن المانجو</a></p>
                <p><a href="#">مقال ن الفروله</a></p>
              </div>

            </div>

          </div>

        </div>

        <div className='grid w-full pb-4 grid-cols-1 text-xs px-2  text-start gap-3 lg:flex lg:items-center lg:justify-center lg:gap-5'>
          <Link className='   text-white ' href="/">عن خصم الان</Link>
          <Link className='   text-white ' href="/contactus">تواصل معنا</Link>
          <Link className='   text-white ' href="/privacy-policy">سياسة الخصوصية </Link>
          <Link className='   text-white  ' href="/terms">شروط الاستخدام </Link>
          <Link className='   text-white  ' href="/">خريطة الموقع </Link>
        </div>
        {/* -------------------------------- [copyright] ------------------------------- */}

        <div className='w-full flex justify-center items-center text-[#647d89] bg-[#1e2b35] p-4'>
         
           كل الحقوق محفوظه لموقع خصم الان 2024 ©  
        </div>

      </section>
    </>






  )
}
