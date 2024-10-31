import Image from 'next/image'
import React from 'react'

export default function Cuntry({ data }) {
    interface type {
        img: string
    }
   
    
    // let data: type[] = [
    //     { img: "/icons/palstean.png" },
    //     { img: "/icons/egypt.jpeg" },
    //     { img: "/icons/pahren.jpeg" },
    //     { img: "/icons/soudi.jpeg" },
    //     { img: "/icons/uae.jpeg" },
    //     { img: "/icons/c1.jpeg" },
    //     { img: "/icons/c1.jpeg" },
    //     { img: "/icons/qatar.jpeg" },
    // ]
    return (
        <section className='w-full h-full  gap-2 items-center justify-center  pt-2 grid grid-cols-4'>
            {data.map((item, index) => (
                <div className='border h-full  p-2 bg-white flex items-center justify-center'>
                    <Image
                        src={`${process.env.API_HOST}uploads/Country/${item.CountryPhoto}`}
                        alt={`${process.env.API_HOST}uploads/Country/${item.CountryPhoto}`}
                        width={50}
                        height={50}

                    />
                </div>
            ))}
        </section>
    )
}
