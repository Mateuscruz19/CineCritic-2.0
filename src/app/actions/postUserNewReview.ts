 
   interface Body {
    userId : number;
    movieId: string;
    nota: number;
    review: string;
  }

export default async function postUserNewReview(movieId: string, nota: number, review: string, userId: number) {
 
    const body: Body = {
        userId: userId,
        movieId: movieId,
        nota: nota,
        review: review,
    }

    const res = await fetch(`/api/reviewpost`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    });

    const data = await res.json();
    return data;
}   