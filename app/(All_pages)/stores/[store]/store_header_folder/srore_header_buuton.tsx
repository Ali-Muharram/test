"use client"
import React from 'react'

export default function Store_header_buuton({ gide_more }) {

    const scrollToGideMore = () => {
        console.log(gide_more);
        
        if (gide_more.current) {
            gide_more.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div
            onClick={scrollToGideMore}
            className='w-full flex items-center justify-end'>
            <button className='text-white text-xs mt-2 bg-main py-2 px-4 rounded '>قراءة المزيد</button>
        </div>
    )
}
