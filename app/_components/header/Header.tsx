import React from 'react'
import Search_Header from './Search_Header'
import Image from 'next/image'
import Navebar from './Navebar'
import Link from 'next/link'


export default function Header() {
    return (
        <section className='w-full bg-[#314555] flex flex-col items-center'>
            { /* --------------------------------- [Header] --------------------------------- */}
            <div className='w-full max-w-[1200px] py-6 px-4 gap-8 flex-1 flex flex-col justify-between items-center sm:flex-row lg:py-8 lg:px-10 '>
                <Link href="/">
                    <Image
                        src="/logo.png" // مسار الصورة
                        alt="شعار Couponis" // نص بديل للصورة
                        width={150}
                        height={40}
                         // This makes the image fill its parent container
                        style={{ objectFit: 'contain' }}
                    />
                </Link>
                <Search_Header />
            </div>
            { /* ------------------------------- End Header ------------------------------- */}

            {/* --------------------------------- navebar --------------------------------  */}

            <Navebar />
        </section>
    )
}
