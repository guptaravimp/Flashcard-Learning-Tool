import React, { useState, useEffect } from 'react';
import FlashCardList from '../components/FlashCardList';
import axios from 'axios';
const Home = () => {
  const [cards,setCards] = useState([]);
  useEffect(() => {
    axios.get('https://vercel.com/ravi-guptas-projects-983a0fa4/flashcard-learning-tool-api/F42c9aEp1USPXR8ZeG9QwvbNoheo/flashcards')
      .then(response => setCards(response.data))
      .catch(error => console.error('Error fetching flashcards:', error));
  }, []);
 

  return (
    <div className='maincontainer'>
      <h1>Flashcard Learning Tool!</h1>
      <FlashCardList flashcards={cards}/>
     
    </div>
  );
};

  
export default Home;
