import { Answer, Answer2, Champions, SkinList } from "../interfaces";

const root: string = "https://ddragon.leagueoflegends.com/cdn/14.13.1/data/en_US/champion";
const root2: string = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/";

async function bringSkins(): Promise<Answer> {
    try {
        const responseChampions: any = await fetch(`${root}.json`);
    
        if (!responseChampions.ok) {
            throw new Error(
                `Error ${responseChampions.status}: Problem encountered retrieving data`
            );
        }

        const rawData: Champions = await responseChampions.json();
        const championsNames: string[] = [];
        
        for (let key in rawData.data) {
            championsNames.push(key);
        }

        let skinListAnswer: SkinList[] = [];

        championsNames.map(async (name: string) => {
            const response: any = await fetch(`${root}/${name}.json`);

            if (!response.ok) {
                throw new Error(
                    `Error ${responseChampions.status}: Problem encountered retrieving data`
                );
            }

            const championInfo: Champions = await response.json();

            let skinList: any[] = [];
            for (let key in championInfo.data) {
                skinList.push(championInfo.data[key].skins)
            }

            skinList[0].shift();

            const singleChampionSkinList: SkinList = {name: name, skins: skinList[0]};
            skinListAnswer.push(singleChampionSkinList);
        })

        const data: Answer = {
            message: "Data properly fetched",
            success: true,
            data: skinListAnswer,
        };

        return data;

    } catch (error: any) {
        const errorAnswer: Answer = {
          message: error,
          success: false,
          data: []
        };
    
        return errorAnswer;
      }
}

async function loadSplashArt(champName: string, num: number): Promise<Answer2> {
    try {
        const response: any = await fetch(`${root2}${champName}_${num}.jpg`);

        if (!response.ok) {
            throw new Error(
                `Error ${response.status}: Problem encountered retrieving data`
            );
        }

        //const rawData: string = await imageToBase64(response.url);

        const data: Answer2 = {
            message: "Data properly fetched",
            success: true,
            data: response.url,
        };

        return data;

    } catch (error: any) {
        const errorAnswer: Answer2 = {
          message: error,
          success: false,
          data: ""
        };
    
        return errorAnswer;
    }
}

const _ = {
    bringSkins,
    loadSplashArt
}

export default _;