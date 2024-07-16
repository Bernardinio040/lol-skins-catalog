import "./Surfer.scss"

import { SurferInterface } from "../../interfaces";

import { useNavigate } from "react-router-dom";

export const Surfer: React.FC<SurferInterface> = ({path, destiny}) => {

    const navigate = useNavigate()

    return (
        <div className="surfer-design" onClick={()=>navigate(path)}>
            {destiny}
        </div>
    )
}

export default Surfer;