

export default async function getAllReviews(movieId: string) {

    try {
        const res = await fetch(`/api/userreview/${movieId}`);
        const data = await res.json();
        return data;
    } catch (error: any) {
        return null;
    }
}

