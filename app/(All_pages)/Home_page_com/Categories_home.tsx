import React from 'react'
import Image from 'next/image';
import { Key } from 'lucide-react';
import Link from 'next/link';

export default function Categories({ data }) {
    type Category = {
        name: string;
        img: string;

    };

    // const catArray: Category[] = [
    //     { img: "/icons/اجهزة منزلية.png", name: "اجهزة منزلية" },
    //     { img: "/icons/احذية.png", name: "احذية" },
    //     { img: "/icons/اكسسوارت.png", name: "اكسسوارت" },
    //     { img: "/icons/الام والطفل.png", name: "الام والطفل" },
    //     { img: "/icons/الجمال والعناية.png", name: "الجمال والعناية" },
    //     { img: "/icons/الكترونيات.png", name: "الكترونيات" },
    //     { img: "/icons/الملابس.png", name: "الملابس" },
    // ];



    // { icon: "faCutlery", label: "الطعام والمشروبات", count: 40 },
    // { icon: "faCalendar", label: "الفعاليات", count: 42 },
    // { icon: "faFemale", label: "الجمال", count: 48 },
    // { icon: "faBolt", label: "اللياقة البدنية", count: 33 },
    // { icon: "faImage", label: "الأثاث", count: 50 },
    // { icon: "faUmbrella", label: "الموضة", count: 33 },
    // { icon: "faShoppingCart", label: "التسوق", count: 37 },
    // { icon: "faHome", label: "المنزل والحديقة", count: 30 },
    // { icon: "faPlane", label: "السفر", count: 48 },
    return (
        <section className='w-full  bg-white p-5 h-full  text-black'>
            <div className='w-ful grid grid-cols-2 gap-4 md:grid-cols-1'>
                {data.map((item, index) => (
                    <div key={index.id} className='w-full rounded cursor-pointer transition-all duration-200 hover:-translate-x-4 flex border pb-2 border-gray-500/10 border-x-0 border-t-0  '>

                        <Image
                            src={`${process.env.API_HOST}uploads/Category/${item.CategoryPhoto}`}
                            width={35}
                            height={35}
                            alt={item.CategoryPhoto}
                            layout='fixed'
                            loading="eager"
                            priority={true}

                        />
                        <p className='h-full w-[1px] text-transparent mx-2 bg-black/20'>d</p>
                        <p className='text-[#717f86] h-full flex items-center text-sm'>{item.CategoryName}</p>
                    </div>
                ))}
                <Link className='h-full flex items-center justify-center border border-main p-2' href={"/categories"}>
                    <p className='text-[#717f86] hover:text-[#2ed87b] text-sm cursor-pointer transition-all duration-200 hover:animate-vibrate '>كل الفئات</p>

                </Link>

            </div>
        </section>
    )
}
