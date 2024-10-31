import St from "../../../_components/st";


export async function GetCategoriesApi2() {

    const url = `${process.env.API_HOST}Categories`;

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
