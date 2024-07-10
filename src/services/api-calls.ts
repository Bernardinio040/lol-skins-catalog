import { Answer, ChampionSkinList, Champions } from "../interfaces";

const root: string = "https://ddragon.leagueoflegends.com/cdn/14.13.1/data/en_US/champion";

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

        championsNames.map(async (name: string) => {
            const response: any = await fetch(`${root}/${name}.json`);

            if (!response.ok) {
                throw new Error(
                    `Error ${responseChampions.status}: Problem encountered retrieving data`
                );
            }

            const championInfo: Champions = await response.json();

            const skinList: any[] = [];
            for (let key in championInfo.data) {
                skinList.push(championInfo.data[key].skins)
            }

            skinList[0].shift();
        }) //jakis return wszystkich skinlistow

        const data: Answer = {
            message: "Data properly fetched",
            success: true,
            data: championsNames,
        };

        return data;
    } catch (error: any) {
        const errorAnswer: Answer = {
          message: error,
          success: false,
        };
    
        return errorAnswer;
      }
}

export default bringSkins;