import React from 'react'
import Image from 'next/image'
import { GetCategoriesApi2 } from './api/GetCategoriesApi'
import St from '../../_components/st'
type DataItem = {
    CategoryPhoto: string;
    CategoryName: string;
}
export default async function Categories() {

   




    const url = `${process.env.API_HOST}Categories`;

  
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                St: St(),
                'Cache-Control': 'no-cache'
            },
            cache: 'no-store'
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();


       
   


    const CategoriesData = data

    

    // let data: DataItem[] = [
    //     { CategoryPhoto: "/icons/اجهزة منزلية.png", CategoryName: "اجهزة منزلية" },
    //     { CategoryPhoto: "/icons/احذية.png", CategoryName: "احذية" },
    //     { CategoryPhoto: "/icons/اكسسوارت.png", CategoryName: "اكسسوارت" },
    //     { CategoryPhoto: "/icons/الام والطفل.png", CategoryName: "الام والطفل" },
    //     { CategoryPhoto: "/icons/الجمال والعناية.png", CategoryName: "الجمال والعناية" },
    //     { CategoryPhoto: "/icons/الكترونيات.png", CategoryName: "الكترونيات" },
    //     { CategoryPhoto: "/icons/الملابس.png", CategoryName: "الملابس" },
    //     { CategoryPhoto: "/icons/المنزل والاثاث.png", CategoryName: "المنزل والاثاث" },
    //     { CategoryPhoto: "/icons/توصيل الطعام.png", CategoryName: "توصيل الطعام" },
    //     { CategoryPhoto: "/icons/خدمات.png", CategoryName: "خدمات" }
    // ]
    return (
        <section>
            <div className='w-full grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {CategoriesData.map((item, index) => (
                    <div key={index}>
                        <Item_categories

                            name={item.CategoryName}
                            img={item.CategoryPhoto}
                        />
                    </div>

                ))}

            </div>
        </section>
    )
}


function Item_categories({ name, img }) {
    return (
        <div className='bg-white gap-3 p-8 rounded flex flex-col  items-center justify-center cursor-pointer hover:bg-main w-full hover:text-white '>
            <Image
                src={`${process.env.API_HOST}uploads/Category/${img}`}
                alt=""
                width={40}
                height={40}
                layout='fixed'
            />
            <h3 className=''>
                {name}
            </h3>
        </div>
    )
}