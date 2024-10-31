import Image from 'next/image'
import React from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";


export default function Copon_model({ action }) {
    return (
        <section

            className='w-full  overflow-hidden z-50 h-screen flex flex-col  items-center justify-center inset-0 fixed bg-black/40'>

            <div className='w-[95%]   p-3 relative  flex items-start md:w-[50%]'>
                <div
                    onClick={() => { action(false) }}
                    className='w-[20px] font-bold absolute top-0 right-0   h-[20px] bg-white text-black rounded-full flex  items-center justify-center text-center cursor-pointer'>
                    X
                </div>
                <div className='w-full flex flex-col gap-5 p-5 rounded bg-white'>
                    <div className='w-full flex item-center justify-center'>
                        <Image
                            src={"https://d1fxr6qy94trui.cloudfront.net/sites/default/files/styles/merchant_logo/public/store_icon/mwq-nmshy-lltswq.jpg"}
                            width={100}
                            height={100}
                            alt='coupone'
                            layout='response'
                        />
                    </div>

                    <div className='w-full flex flex-col items-center justify-center md:gap-3 '>
                        <h1 className='w-full flex items-center justify-center text-center text-lg font-semibold md:text-2xl '>
                            كود خصم نون مصر بقيمة 10% إضافي على كل المتجر
                        </h1>

                        <div className='mt-5 w-full flex gap-5 flex-col items-center justify-center md:w-[75%] '>
                            <div className=' w-full flex gap-1 item-centr justify-center'>
                                <p className='bg-gray-100 text-sm text-center p-2  md:text-sm md:p-3'>151515</p>

                            </div>
                            <div className='w-full flex items-center gap-2 justify-between '>
                                <button className='bg-[#ffa619] w-full rounded text-sm p-2 text-white md:text-sm md:p-3'>نسخ الكوبون</button>
                                <button className='bg-[#ffa619] w-full  rounded p-2 text-sm  text-white md:text-sm md:p-3'>الانتقال الي المتجر</button>

                            </div>

                        </div>


                    </div>
                    <div className='w-full gap-5 flex flex-col items-center justify-center'>
                        <h3> سوف يتم الانتقال الي المتجر خلال</h3>

                        <CountdownCircleTimer
                            isPlaying={true}
                            duration={5}
                            size={150}
                            colors={["#004777", "#F7B801", "#A30000"]}
                            colorsTime={[5, 3, 0]} // إضافة هذه السطر
                        >
                            {({ remainingTime }) => remainingTime}
                        </CountdownCircleTimer>

                    </div>

                </div>

            </div>




        </section>
    )
}
