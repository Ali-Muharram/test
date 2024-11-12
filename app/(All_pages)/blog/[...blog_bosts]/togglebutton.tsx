"use client"
import React from 'react'

const toggleHeight1 = (ob) => {
    ob.currentTarget.classList.toggle("max-h-[1000px]")
    ob.currentTarget.classList.toggle("max-h-[50px]")
};
export default function Togglebutton({ children }) {
    return (
        <div
            onClick={(e) => { toggleHeight1(e) }}

            className=' overflow-hidden max-h-[50px] md:max-h-fit transition-height duration-200 '>
            {children}
        </div>
    )
}
