
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Copones_posts from './Copones_posts'
import More_markts from './More_markets'
import St from '../../../_components/st'


export default async function page({ params }) {
  let BlogTitleLink = decodeURIComponent(params.blog_bosts[0])

  const url = `${process.env.API_HOST}Blogs/custom`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // تأكد من تحديد نوع المحتوى
      'St': St(), // تأكد من أن دالة St() تعيد قيمة صحيحة
      'Cache-Control': 'no-cache'
    },
    cache: 'no-store',
    body: JSON.stringify({ BlogTitleLink }) // تأكد من أن BlogTitleLink معرف
  });



  if (!response.ok) {
    return ('Sorry, not found');
  }

  const BlogCustomPageData = await response.json();

  console.log(BlogCustomPageData);





  /* -------------- navebar toogle open and close in phone style -------------- */

  const toggleHeight1 = (ob) => {
    ob.currentTarget.classList.toggle("max-h-[1000px]")
    ob.currentTarget.classList.toggle("max-h-[50px]")
  };
  return (
    <>


      <section className='h-full w-full  grid  grid-cols-1 gap-5 lg:grid-cols-4 lg:mt-2 '>
        <div className='order-2 lg:order-1 flex h-full flex-col gap-2 lg:col-span-3'>
          <Content_post info={BlogCustomPageData} />
          <Social_media />
        </div>








        <div className=' w-full order-1 flex flex-col gap-5 lg:order-2    '>
          {/* <Search /> */}

          <div
            // onClick={(e) => { toggleHeight1(e) }}

            className=' overflow-hidden max-h-[50px] md:max-h-fit transition-height duration-200 '>



            <div className='w-full p-3  flex items-center justify-between bg-white lg:mb-5'>
              <div className='w-full flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width={"20px"} viewBox="0 0 448 512"><path fill="#2ed87b" d="M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>

                <h1 className='text-lg   bg-white  cursor-pointer text-black font-semibold'>اقوى الصفقات</h1>

              </div>



              <div className=' rounded-full bg-main cursor-pointer'>
                <svg className=' transform rotate-90 lg:hidden' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f7f7f7"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>

              </div>


            </div>

            <div

              className='  overflow-hidden bg-white transition-height duration-200 lg:max-h-full lg:p-2  ' >
              <Copones_posts />

            </div>
          </div>

          <div
            // onClick={(e) => { toggleHeight1(e) }}
            className=' overflow-hidden max-h-[50px] md:max-h-fit transition-height duration-200'>

            <div className='w-full p-3  flex items-center justify-between bg-white lg:mb-5'>
              <div className='w-full flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22px" viewBox="0 0 576 512"><path fill="#2ed87b" d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0L109.6 0C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9c0 0 0 0-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3L448 384l-320 0 0-133.4c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3L64 384l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64 0-131.4c-4 1-8 1.8-12.3 2.3z" /></svg>
                <h1 className='text-lg   bg-white  cursor-pointer text-black font-semibold'>اشهر المتاجر</h1>
              </div>
              <div className=' rounded-full bg-main cursor-pointer'>
                <svg className=' transform rotate-90 transition-all duration-200 lg:hidden' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f7f7f7"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>

              </div>


            </div>



            <div

              className='w-full overflow-hidden  transition-height duration-200  bg-white lg:max-h-full lg:p-2 '>

              <More_markts />

            </div>


          </div>
        </div>
      </section>
    </>
  )
}



/* -------------------------------------------------------------------------- */
/*                                content post                                */
/* -------------------------------------------------------------------------- */
function Content_post({ info }) {
  return (

    <section className='bg-white flex-1   flex flex-col cursor-pointer  '>
      <div className='w-full flex h-60 md:h-120 lg:h-96   '>
        <Image className=''
          src={`${process.env.API_HOST}uploads/Blogs/${info.BlogPhoto}`}

          alt=''
          width={300}
          height={100}
          layout='responsive'
          loading='lazy'
        />
      </div>

      <div className='p-4 flex flex-col gap-5 h-fit   '>
        <h1 className='text-[#262626] text-3xl hover:text-[#2ed87b] transition-all duration-300 font-semibold'>{info.BlogTitle}</h1>

        <div className='flex items-center gap-4 text-xs text-[#777777]'>
          <div className='flex  items-center gap-2'>
            <svg className='' xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 448 512"><path fill="#777777" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg>
            <span className=' transition-all duration-300'>كتب بواسطة : خصم الان</span>
          </div>
          <div className='flex  items-center gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#777777"><path d="M216-96q-29.7 0-50.85-21.5Q144-139 144-168v-528q0-29 21.15-50.5T216-768h72v-96h72v96h240v-96h72v96h72q29.7 0 50.85 21.5Q816-725 816-696v528q0 29-21.15 50.5T744-96H216Zm0-72h528v-360H216v360Zm0-432h528v-96H216v96Zm0 0v-96 96Z" /></svg>
            <span className=''>

              {info.BlogDateactive ? new Date(info.BlogDateactive).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' }) : 'التاريخ غير متوفر'}

            </span>
          </div>

        </div>
       
        <div  dangerouslySetInnerHTML={{ __html: info.content }}  className='w-full flex  flex-col text-justify   text-[#777777]'>
         




        </div>


      </div>


    </section>
  )
}



function Social_media() {
  return (
    <section>
      <h1 className='font-semibold flex gap-2 items-center my-5'>
        مشاركة
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M648-96q-50 0-85-35t-35-85q0-9 4-29L295-390q-16 14-36.05 22-20.04 8-42.95 8-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 43 8t36 22l237-145q-2-7-3-13.81-1-6.81-1-15.19 0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-43-8t-36-22L332-509q2 7 3 13.81 1 6.81 1 15.19 0 8.38-1 15.19-1 6.81-3 13.81l237 145q16-14 36.05-22 20.04-8 42.95-8 50 0 85 35t35 85q0 50-35 85t-85 35Zm0-72q20.4 0 34.2-13.8Q696-195.6 696-216q0-20.4-13.8-34.2Q668.4-264 648-264q-20.4 0-34.2 13.8Q600-236.4 600-216q0 20.4 13.8 34.2Q627.6-168 648-168ZM216-432q20.4 0 34.2-13.8Q264-459.6 264-480q0-20.4-13.8-34.2Q236.4-528 216-528q-20.4 0-34.2 13.8Q168-500.4 168-480q0 20.4 13.8 34.2Q195.6-432 216-432Zm432-264q20.4 0 34.2-13.8Q696-723.6 696-744q0-20.4-13.8-34.2Q668.4-792 648-792q-20.4 0-34.2 13.8Q600-764.4 600-744q0 20.4 13.8 34.2Q627.6-696 648-696Zm0 480ZM216-480Zm432-264Z" /></svg>
      </h1>
      <div className='flex gap-2    w-full justify-start items-start md:items-center md:justify-start md:w-fit '>
        <div className='bg-white transition-all duration-600 rounded-full text-main p-2 hover:bg-main hover:text-white cursor-pointer'> {/* Change text-blue-500 to any color you prefer */}
          <svg className='fill-current' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 30 30">
            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"></path>
          </svg>
        </div>
        <div className='bg-white transition-all duration-600 rounded-full  text-main hover:bg-main hover:text-white p-2 cursor-pointer '>
          <svg className='fill-current' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 30 30">
            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
          </svg>
        </div>
        <div className='bg-white transition-all duration-600  rounded-full text-main hover:bg-main hover:text-white p-2 cursor-pointer '>
          <svg className='fill-current' width="18" height="18" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ionicons-v5_logos</title><path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"></path></g></svg>
        </div>

        <div className='bg-white transition-all duration-600 rounded-full text-main hover:bg-main hover:text-white p-2 cursor-pointer '>
          <svg className='fill-current' width="18" height="18" viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style></style></defs><path d="M40.83,8.48c1.14,0,2,1,1.54,2.86l-5.58,26.3c-.39,1.87-1.52,2.32-3.08,1.45L20.4,29.26a.4.4,0,0,1,0-.65L35.77,14.73c.7-.62-.15-.92-1.07-.36L15.41,26.54a.46.46,0,0,1-.4.05L6.82,24C5,23.47,5,22.22,7.23,21.33L40,8.69a2.16,2.16,0,0,1,.83-.21Z"></path></g></svg>
        </div>
        <div className='bg-white transition-all duration-600 rounded-full text-main hover:bg-main hover:text-white p-2 cursor-pointer '>
          <svg className='fill-current' width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z" ></path> </g></svg>
        </div>
      </div>
    </section>


  )
}



/* -------------------------------------------------------------------------- */
/*                                   search                                   */
/* -------------------------------------------------------------------------- */

function Search() {

  return (
    <section className='bg-white p-5 w-full'>
      <div className='w-full flex p-2 bg-[#f2f2f2]'>
        <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#282828"><path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z" /></svg>
        <input className='w-full bg-[#f2f2f2] outline-none  px-2' type="text" placeholder='البحث عن ......' />
      </div>

    </section>
  )
}




