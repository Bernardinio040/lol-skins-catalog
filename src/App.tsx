import { useEffect } from 'react';
import './App.scss'
import { Answer } from './interfaces';
import bringSkins from './services/api-calls';

function App() {
  useEffect(() => {
    const fetchLolSkins = async (): Promise<any> => {
      const fetched: Answer = await bringSkins();
      console.log(fetched);
    };
    fetchLolSkins();
  });

  return (
    <>
      lol!
    </>
  )
}

export default App
