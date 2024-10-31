import React from 'react';
import "./globals.css";
import { Cairo } from 'next/font/google';
import Header from './_components/header/Header';
import Footer from './_components/footer/Footer';
import { Metadata } from 'next';
import Watsapp from './_components/Whatsapp/Watsapp';
import Scroll_to_top from './_components/scroll-to-top/Scroll-to-top';



export const metadata: Metadata = {
    title: 'خصم الان',
    description: 'The official Next.js Course Dashboard, built with App Router.',
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
    icons: {
        icon: '/favicon.ico', // استبدل بالمسار الصحيح للأيقونة
    },
};

const cairo = Cairo({
    weight: ['400', '700'], // Specify the font weights you need
    subsets: ['latin'], // Include subsets as needed
});
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" dir='rtl'>
          
           
            <body className={`${cairo.className} bg-gray-100 flex flex-col items-center min-h-dvh`} >
                <Header />
                <main className="flex-1 my-5 md:my-10 px-3 md:px-5  w-full   max-w-[1100px]" >
                    {children}
                </main>

                <Watsapp />
                <Footer />
                <Scroll_to_top/>

            </body>
        </html>
    )
}




