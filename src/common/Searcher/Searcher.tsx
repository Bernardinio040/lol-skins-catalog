import { SearcherInterface } from "../../interfaces";
import "./Searcher.scss"

export const Searcher: React.FC<SearcherInterface> = ({ onClick }) => {
    const letters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    const handleClick = (letter: string) => {
        onClick(letter);
    };

    return(
        <div className="searcher-design">
            {
                letters.map((letter: string) => {
                    return <div className="letter-design" key={letter} onClick={() => { handleClick(letter) }}>{letter}</div>
                })
            }
        </div>
    )
}