import React from 'react';
import Carousel0 from './(All_pages)/Home_page_com/Carousel';
import Categories from './(All_pages)/Home_page_com/Categories_home';
import Eplane_process from './(All_pages)/Home_page_com/Eplane_process';
import Markets from './(All_pages)/Home_page_com/Markets';
import Copone_section from './(All_pages)/Home_page_com/Copone_section';

import Web_info from './(All_pages)/Home_page_com/Web_info';
import Posts from './_components/posts/Posts';
import Link from 'next/link';
import Cuntry from './(All_pages)/Home_page_com/cuntry/cuntry';
import { Get_carousels } from './(All_pages)/Home_page_com/api/carousels';
import St from './_components/st';

export default async function Page() {




    const url = `${process.env.API_HOST}homepage`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            St: St(),
            'Cache-Control': 'no-cache'
        },
        // cache: 'no-store',
        next: { revalidate: 60 }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    if (response.ok) {
        console.log("fetch=========================");
        
    }

    const data = await response.json();






    const HomePageData = data




    return (
        <section className=' flex flex-col gap-5' >
            <div className='w-full gap-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 '>
                <div className='h-full gap-3 flex flex-col  md:col-span-2 lg:col-span-3 '>

                    <Carousel0 slider={HomePageData.SliderData} />
                    < div className='w-full  flex  border border-[#2ed87b] border-y-0 border-l-0 bg-white justify-between items-center  p-4 ' >
                        <div className='flex w-full gap-2 justify-between items-center'>
                            <div className='flex gap-2'>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width={"22px"} viewBox="0 0 448 512"><path fill="#2ed87b" d="M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width={"22px"} viewBox="0 0 512 512"><path fill="#2ed87b" d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" /></svg>
                                <h4 className='font-[600] text-lg'>  متاجر حسب بلدك</h4>
                            </div>
                            <Link href={"/coupons-list"} className='flex items-center gap-1 cursor-pointer '>
                                {/* <p className='hover:text-[#fff] text-sm hover:bg-[#2ed87b] p-2 rounded transition-all duration-200   font-semibold '>
                            الكل

                        </p> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="22px" viewBox="0 0 512 512"><path fill="#2ed87b" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" /></svg>

                            </Link>

                        </div>

                    </div >


                    <Cuntry data={HomePageData.CountriesData} />
                </div>
                <div className='md:col-span-1 lg:col-span-1'>
                    <Categories data={HomePageData.CategoriesData} />
                </div>

            </div>

            {/* <Eplane_process /> */}

            <Markets ShopsData={HomePageData.ShopsData} />

            <div className='w-full gap-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 '>
                <div className='md:col-span-1 lg:col-span-3  '>
                    <Copone_section />
                </div>

                <div className='md:col-span-1 flex flex-col gap-3  lg:col-span-1'>
                    <Web_info />
                    <Eplane_process />
                    {/* <Comments /> */}
                </div>

            </div>


            <section className='w-full gap-5  flex flex-col justify-center '>
                <div className='w-full  flex border border-[#2ed87b] border-y-0 border-l-0 bg-white justify-between items-center  p-4  '>
                    <div className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22px" viewBox="0 0 448 512"><path fill="#2ed87b" d="M446.6 222.7c-1.8-8-6.8-15.4-12.5-18.5-1.8-1-13-2.2-25-2.7-20.1-.9-22.3-1.3-28.7-5-10.1-5.9-12.8-12.3-12.9-29.5-.1-33-13.8-63.7-40.9-91.3-19.3-19.7-40.9-33-65.5-40.5-5.9-1.8-19.1-2.4-63.3-2.9-69.4-.8-84.8 .6-108.4 10C45.9 59.5 14.7 96.1 3.3 142.9 1.2 151.7 .7 165.8 .2 246.8c-.6 101.5 .1 116.4 6.4 136.5 15.6 49.6 59.9 86.3 104.4 94.3 14.8 2.7 197.3 3.3 216 .8 32.5-4.4 58-17.5 81.9-41.9 17.3-17.7 28.1-36.8 35.2-62.1 4.9-17.6 4.5-142.8 2.5-151.7zm-322.1-63.6c7.8-7.9 10-8.2 58.8-8.2 43.9 0 45.4 .1 51.8 3.4 9.3 4.7 13.4 11.3 13.4 21.9 0 9.5-3.8 16.2-12.3 21.6-4.6 2.9-7.3 3.1-50.3 3.3-26.5 .2-47.7-.4-50.8-1.2-16.6-4.7-22.8-28.5-10.6-40.8zm191.8 199.8l-14.9 2.4-77.5 .9c-68.1 .8-87.3-.4-90.9-2-7.1-3.1-13.8-11.7-14.9-19.4-1.1-7.3 2.6-17.3 8.2-22.4 7.1-6.4 10.2-6.6 97.3-6.7 89.6-.1 89.1-.1 97.6 7.8 12.1 11.3 9.5 31.2-4.9 39.4z" /></svg>
                        <h4 className='font-[600] text-lg'> المقالات</h4>
                    </div>
                    <Link href={"/blog"} className='flex items-center gap-2 cursor-pointer '>
                        {/* <p className='hover:text-[#fff] hover:bg-[#2ed87b] p-2 rounded transition-all duration-200    text-xs'>
                            كل المقالات »

                        </p> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="22px" viewBox="0 0 512 512"><path fill="#2ed87b" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" /></svg>

                    </Link>

                </div>
                <div className=' w-full  gap-5 grid grid-cols-1 md:grid-cols-3'>
                    {HomePageData.BlogsData.map((Blog, index) => (
                        <div key={Blog.id}> <Posts info={Blog} /></div>
                    ))}

                    {/* <Posts />
                    <Posts /> */}

                </div>



            </section>



        </section>)
}