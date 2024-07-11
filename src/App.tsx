import { useEffect, useState } from 'react';
import './App.scss'
import { Answer, SkinList, SkinTileInterface } from './interfaces';
import bringSkins from './services/api-calls';
import React from 'react';

function App() {
  const [myData, setMyData] = useState<any[]>([])

  useEffect(() => {
    const fetchLolSkins = async (): Promise<any> => {
      const fetched: Answer = await bringSkins();
      setMyData(fetched.data);
    };

    if (myData.length === 0) {
      fetchLolSkins();
    }
  }, [myData]);

  const SkinTile: React.FC<SkinTileInterface> = ({num, name}) => {
    return (
        <div>
            {num} {name}
        </div>
    )
  }

  let counter: number = 0;

  return (
      <div>
        {
          myData.map((obj: SkinList, index: number) => (
             
              <React.Fragment key={index}>
                {
                  obj.skins.map((skin: any) => {
                    counter++;
                    return <SkinTile num={skin.num} name={skin.name} key={skin.num} />
                  })
                }
              </React.Fragment>
            
          ))
        }
      </div>
  )
}

export default App
