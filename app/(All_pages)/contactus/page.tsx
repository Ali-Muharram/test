import React from 'react'

export default function page() {
    return (

        <section className="bg-white grid grid-cols-1 border border-t-4 border-main border-x-0 border-b-0 lg:grid-cols-2 ">

            <div className="py-8   w-full lg:py-10 px-4 mx-auto ">
                <h2 className="mb-4 w-full text-xl tracking-tight font-extrabold text-start text-gray-900 ">معلومات الاتصال</h2>
                <div className='w-full mb-5 bg-[#f1f1f1] text-transparent h-[2px] flex'>  <div className='w-[15%] bg-main'> </div></div>
                <p className='text-justify text-sm '>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء.

                    العنوان</p>
                <ul className='w-full flex flex-col gap-10 mt-5 py-5'>
                    <li className='flex gap-2 '>
                        <div className='bg-white  rounded-md border-2 border-main flex p-1 w-[50px] h-[50px] '>
                            <span className='bg-main flex items-center justify-center w-full h-full   '>
                                <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#e8eaed"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
                            </span>
                        </div>
                        <div className=' flex flex-col '>
                            <h2 className='text-[#384047] font-semibold'> العنوان</h2>
                            <p className='text-[#717f86]'> 404 ديسين ستريت، ملبورن، أوستراليا</p>
                        </div>
                    </li>

                    <li className='flex gap-2 '>
                        <div className='bg-white  rounded-md border-2 border-main flex p-1 w-[50px] h-[50px] '>
                            <span className='bg-main flex items-center justify-center w-full h-full   '>
                                <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#e8eaed"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
                            </span>
                        </div>
                        <div className=' flex flex-col '>
                            <h2 className='text-[#384047] font-semibold'> البريد الإلكتروني</h2>
                            <p className='text-[#717f86]'>  Email@address.com</p>
                        </div>
                    </li>

                    <li className='flex gap-2 '>
                        <div className='bg-white  rounded-md border-2 border-main flex p-1 w-[50px] h-[50px] '>
                            <span className='bg-main flex items-center justify-center w-full h-full   '>
                                <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#e8eaed"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>
                            </span>
                        </div>
                        <div className=' flex flex-col '>
                            <h2 className='text-[#384047] font-semibold'> الهاتف</h2>
                            <p className='text-[#717f86]'>  +01065084762</p>
                        </div>
                    </li>


                </ul>
            </div>


            {/* ----------------------------- form contact us ----------------------------  */}
            <div className="py-8   w-full lg:py-10 px-4 mx-auto ">
                <h2 className="mb-4 w-full text-xl tracking-tight font-extrabold text-start text-gray-900 ">ابقي علي تواصل</h2>
                <div className='w-full mb-5 bg-[#f1f1f1] text-transparent h-[2px] flex'>  <div className='w-[15%] bg-main'> </div></div>

                <form action="#" className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-800 ">الاسم</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm   outline-gray-900 focus:outline-main   block w-full p-2.5 " required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-semibold text-gray-800 ">البريد الإلكتروني</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 shadow-sm focus:outline-main " required />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-semibold text-gray-800 ">الرسالة</label>
                        <textarea id="message" rows={4} className="block resize-none p-2.5 w-full text-sm text-gray-900 bg-gray-50  shadow-sm border border-gray-300 focus:outline-main " ></textarea>
                    </div>
                    <button type="submit" className="py-3 px-8 text-sm font-medium text-center text-white  bg-main sm:w-fit  focus:ring-4 focus:outline-none  ">ارسال الرساله</button>
                </form>
            </div>
        </section>
    )
}
