import React from 'react'
import Link from 'next/link'

export default function Navigator({title , target}) {
    return (
        <div className='w-full flex  bg-white p-5 inset-0  justify-between'>
            <h1 className='font-bold text-xl ' >{title}</h1>
            <ul className=' flex gap-1 items-center '>
                <li className='text-xs'>
                    <Link className='hover:text-main font-semibold' href={"/"}>الرئيسية</Link>
                </li>
                <li className='text-xs'> {target} </li> {/* Use &gt; for the greater-than symbol */}
            </ul>
        </div>
    )
}
