"use client"
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'


export default function Up_Footer() {

    const targets = [1234567, 8901234, 3456789, 4567890]; // الأهداف الأربعة
    const [count, setCount] = useState(Array(targets.length).fill(0));
    const divRef = useRef(null);

    useEffect(() => {
        let intervalId
        const increment = targets.map(target => Math.ceil(target / 100));

        const updateNumbers = () => {
            setCount(prev => prev.map((num, index) => {
                if (num < targets[index]) {
                    return Math.min(num + increment[index], targets[index]);
                }
                return num;
            }));
            
        };



        /* -------------------------------------------------------------------------- */
        /*                  start animathion when user show up_footer                 */
        /* -------------------------------------------------------------------------- */

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                 
                    intervalId = setInterval(updateNumbers, 5);
                    // هنا يمكنك إضافة أي كود آخر ترغب في تنفيذه عند ظهور العنصر
                } else {
                    // إذا كنت تريد إيقاف المؤقت عند عدم ظهور العنصر
                    clearInterval(intervalId);
                    setCount(Array(targets.length).fill(0))
                }
            },
            { threshold: 0.1 } // Adjust threshold as needed
        );

        if (divRef.current) {
            observer.observe(divRef.current);
        }



        return () => {
            clearInterval(intervalId);
            observer.disconnect(); // Cleanup on unmount
        };
    }, [targets]);






    return (
        <section
            ref={divRef}
            className='w-full text-center  p-5 grid grid-cols-2 gap-5  bg-[#314555]  items-center justify-center md:grid-cols-4'>
            <div className='flex flex-col space-y-0  items-center justify-center'>
                <Image
                    src="https://demoxml.com/html/geodeo/images/coutner1.png" // مسار الصورة
                    alt="شعار Couponis" // نص بديل للصورة
                    width={40}
                    height={40}
                    layout="fixed" // استخدم "fixed" إذا كنت تريد أبعادًا ثابتة
                />
                <h2 className='text-[#fff] pt-2  text-lg mp-4 '>{count[0]}</h2>
                <p className='text-[#939598]   text-sm'>Coupons Used Last Month</p>
            </div>
            <div className='flex flex-col space-y-0  items-center justify-center'>
                <Image
                    src="https://demoxml.com/html/geodeo/images/coutner3.png" // مسار الصورة
                    alt="شعار Couponis" // نص بديل للصورة
                    width={40}
                    height={40}
                    layout="fixed" // استخدم "fixed" إذا كنت تريد أبعادًا ثابتة
                />
                <h2 className='text-[#fff] pt-2  text-lg mp-4 '>{count[1]}</h2>
                <p className='text-[#939598]   text-sm'>Coupons Used Last Month</p>
            </div>
            <div className='flex flex-col space-y-0  items-center justify-center'>
                <Image
                    src="https://demoxml.com/html/geodeo/images/coutner2.png" // مسار الصورة
                    alt="شعار Couponis" // نص بديل للصورة
                    width={40}
                    height={40}
                    layout="fixed" // استخدم "fixed" إذا كنت تريد أبعادًا ثابتة
                />
                <h2 className='text-[#fff] pt-2  text-lg mp-4 '>{count[2]}</h2>
                <p className='text-[#939598]   text-sm'>Coupons Used Last Month</p>
            </div>
            <div className='flex flex-col space-y-0  items-center justify-center'>
                <Image
                    src="https://demoxml.com/html/geodeo/images/coutner4.png" // مسار الصورة
                    alt="شعار Couponis" // نص بديل للصورة
                    width={40}
                    height={40}
                    layout="fixed" // استخدم "fixed" إذا كنت تريد أبعادًا ثابتة
                />
                <h2 className='text-[#fff] pt-2  text-lg mp-4 '>{count[3]}</h2>
                <p className='text-[#939598]   text-sm'>Coupons Used Last Month</p>
            </div>
        </section>
    )
}
