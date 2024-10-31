import React from 'react'

export default function Search_Header() {
    return (
        <section className=' w-full max-w-[350px]  h-[40px] flex items-center  bg-white  '>
            <input className='  w-full px-[10px] py-[5px] outline-0 border-0   ' type="text" placeholder='انا ابحث عن  ....' />
            <button
                aria-label="Submit"
                className='bg-[#2ed87b] h-full text-center flex items-center justify-center text-white px-2 text-xs '>
                <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#e8eaed"><path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z" /></svg>
            </button>
        </section>
    )
}

