'use client';

import postUserNewReview from '@/app/actions/postUserNewReview';
import React, { useState } from 'react';
import { toast } from "react-hot-toast";

interface Props {
  movieId: string;
  userId: number;
}

const CreateNewUserReview: React.FC<Props> = ({ movieId, userId }) => {

    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);

    const handleReviewChange = (e: { target: { value: string; }; }) => {
        const text = e.target.value;
            if (text.length <= 1000) {
                setReview(text);
            } else {
                toast.error('Apenas 1000 caracteres!');
            }
        };
            
        const handleRatingChange = (e: { target: { value: string; }; }) => {
            const value = parseFloat(e.target.value);
            if (!isNaN(value)) {
              setRating(value);
            }
          };
        
          const handleRatingKeyDown = (e: { preventDefault: () => void; }) => {
            // Impede a digitação manual no campo de nota
            e.preventDefault();
          };

    async function handleSubmit(e: { preventDefault: () => void; }){
         e.preventDefault();
        // Aqui você pode enviar a review para o backend ou realizar qualquer ação desejada
        console.log('Review:', review);
        console.log('Rating:', rating);
          
        const nota = rating;

         try {
         const response = await postUserNewReview(movieId, nota, review, userId)

          console.log(response);
          toast.success('Review enviada com sucesso!')
         } catch (error) {
          console.log(error);
          toast.error('Erro ao enviar review!')
         }
          
        setReview('');
        setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-900 bg-opacity-75 rounded-lg">
      <h2 className=" mb-2 text-white text-lg font-bold">Enviar Review de Filme:</h2>
      <div className="mb-4 text-lg text-gray-400" >
        <label className="block mb-2" htmlFor="review">
          Sua Review:
        </label>
        <textarea
          id="review"
          className="w-full p-2 border border-gray-300"
          rows={4}
          value={review}
          onChange={handleReviewChange}
          required
        ></textarea>
        <p>Apenas 1000 caracteres!</p>
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="rating">
          Classificação:
        </label>
        <input
          type="number"
          id="rating"
          className="w-16 p-2 border border-gray-500 text-yellow-300 bg-gray-600"
          min="0"
          max="10"
          step="0.1"
          value={rating}
          onChange={handleRatingChange}
          onKeyDown={handleRatingKeyDown}
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Enviar Review
      </button>
    </form>
  );
};

export default CreateNewUserReview;