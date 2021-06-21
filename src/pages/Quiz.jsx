import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Questions from '../components/Questions';

const Quiz = () => {
  const [points, setPoints] = useState(0);
  const [submit, setSubmit] = useState(false);
  const { pathname } = useLocation();

  const handlePoints = (points) => {
    setPoints(points);
  }

  const handleSubmit = () => {
    setSubmit(true);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  console.log(points);

  return (
    <div class="bg-yellow-400 min-h-screen">
      <div class="container mx-auto">
        <h1 class="text-yellow-900 text-center text-6xl py-10 font-semibold">MAGIC QUIZ</h1>
        { submit && <p class="container mx-auto text-center">You've scored <span class="text-3xl">{points}</span> Points</p>}
      </div>
      <Questions handlePoints={handlePoints} hSubmit={handleSubmit}/>
    </div>
  )
}

export default Quiz;