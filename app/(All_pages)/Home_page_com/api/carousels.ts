import St from "../../../_components/st";


export async function Get_carousels() {
    // return [
    //     "https://cdn.almowafir.com/1/IHG-banner-ar-1.jpg",
    //     "https://cdn.almowafir.com/1/1-47-1.jpg",
    //     "https://cdn.almowafir.com/1/noon-ar-banner-2.jpg"
    // ]

    const url = `${process.env.API_HOST}homepage`;


    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                St: St(),
                'Cache-Control': 'no-cache'
            },
            cache: 'no-store'
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();


        return data;
    } catch (error) {
        console.error(error);
        return "error.data"; // أو يمكنك إرجاع رسالة خطأ مناسبة
    }
}
