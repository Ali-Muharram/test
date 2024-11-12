import React from 'react'
import Image from 'next/image'
import St from '../../_components/st';

export default async function Countries() {
    const url = `${process.env.API_HOST}countries`;


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






    const CountriesData = data
    return (
        <section>
            <div className='w-full grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {CountriesData.map((item, index) => (
                    <div key={index}>
                        <Item_country

                            name={item.CountryName}
                            img={item.CountryPhoto}
                        />
                    </div>

                ))}

            </div>
        </section>
    )
}
function Item_country({ name, img }) {
    return (
        <div className='bg-white gap-3 p-8 rounded flex flex-col  items-center justify-center cursor-pointer hover:bg-main w-full hover:text-white '>
            <Image
                src={`${process.env.API_HOST}uploads/Country/${img}`}
                alt=""
                width={40}
                height={40}
                layout='fixed'
                loading='lazy'
            />
            <h3 className=''>
                {name}
            </h3>
        </div>
    )
}