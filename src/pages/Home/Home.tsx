import { useEffect, useState } from 'react';
import './Home.scss'
import { Answer, Answer2, SkinList, SkinTileInterface } from '../../interfaces';
import _ from '../../services/api-calls';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Searcher } from '../../common/Searcher/Searcher';

function Home() {
  const [myData, setMyData] = useState<any[]>([])
  const [searchLetter, setSearchLetter] = useState<string>('A');

  useEffect(() => {
    const fetchLolSkins = async (): Promise<any> => {
      const fetched: Answer = await _.bringSkins();
      setMyData(fetched.data);
    };

    if (myData.length === 0) {
      fetchLolSkins();
    }
  }, [myData]);

  const SkinTile: React.FC<SkinTileInterface> = ({num, skinName, name, id}) => {
    const [splashArt, setSplashArt] = useState<string>();

    useEffect(() => {
      const fetchSplashArt = async (): Promise<any> => {
        const fetched: Answer2 = await _.loadSplashArt(name, num);
        setSplashArt(fetched.data);
      };

      if (splashArt == null) {
        fetchSplashArt();
      }
    })

    return (
      <Col sm={12} md={6} lg={3} xl={4}>
        <div className='skin-container-design' id={id.toString()} >
            <img src={splashArt} alt={skinName} className='splash-design' />
            <h4>{skinName}</h4>
        </div>
      </Col>
    )
  }

  return (
    <>
      <Searcher onClick={setSearchLetter} />
      <Container className='container-design'>
        <Row>
        {
          myData.map((obj: SkinList, index: number) => {
              if(obj.name.startsWith(searchLetter)) {
                console.log("Champ displayed", obj.name)
                return <React.Fragment key={index}> {
                  obj.skins.map((skin: any) => {
                    return <SkinTile num={skin.num} skinName={skin.name} name={obj.name} id={skin.id} key={skin.id} />
                  })
                }
                </React.Fragment>
              }
              
           })
        }
        </Row>
      </Container>
    </>
  )
}

export default Home
