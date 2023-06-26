/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { ReviewType } from "@/app/types";
import { useEffect } from 'react';
import getAllReviewsData from '@/app/actions/getUserReviewData';

type Res = {
    name: string;
    icon: string;
  };
  

export default function UserReview({ review }: any) {

    const [User, setUser] = useState<string>();
    const [Icon, setIcon] = useState<string>();

    useEffect(() => {
        const fetchUserReview = async () => {
    
        const response = await getAllReviewsData(review.userId);
          console.log(response);
          setUser(response?.name);
          setIcon(response?.icon);
      }
      fetchUserReview();
      }, [review]);

    return(
        <div className="bg-gray-800 rounded-md flex flex-col w-full h-fit p-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mb-4">
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
                <img className="w-10 h-10 rounded-full" src={Icon} alt="avatar" />
                <div className="flex flex-col ml-2">
                    <span className="text-white font-semibold">{User}</span>
                    <span className="text-gray-400 text-xs">A pouco tempo atrás...</span>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3.333l2.598 5.295 5.802.843-4.19 4.078.988 5.748L10 14.167l-5.198 2.15.988-5.748-4.19-4.078 5.802-.843L10 3.333z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-xs ml-1">{review.nota}</span>
            </div>
        </div>
        <div className="flex flex-col mt-2">
            <span className="text-white text-sm">{review.review}.</span>
        </div>
    </div>
    )
};
