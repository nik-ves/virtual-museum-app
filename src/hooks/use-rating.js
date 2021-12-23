import { useState } from "react";

const useRating = (comments) => {
  const [commentList] = useState(comments);

  const sumOfRatings = commentList
    .map((comment) => {
      return comment.rating;
    })
    .reduce((prevV, curV) => {
      return prevV + curV;
    });

  const rating = sumOfRatings / commentList.length;

  return {
    rating,
  };
};

export default useRating;
