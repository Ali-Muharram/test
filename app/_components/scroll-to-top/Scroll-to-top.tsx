"use client"

import { CSSProperties, useEffect, useState } from 'react';

export default function Scroll_to_top() {


    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    return (
        visible && (
            <button className='fixed bottom-5 right-5 z-50 rounded p-2 bg-main text-white  ' onClick={scrollToTop} >
                <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#FFFFFF"><path d="M480-525 291-336l-51-51 240-240 240 240-51 51-189-189Z" /></svg>
            </button>
        )
    )
}



