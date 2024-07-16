import "./Header.scss";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import logo from "/logo.png";
import Surfer from "../Surfer/Surfer";

function Header() {
//   const { state, SetAuth } = useContext(myContext);
  const [decodedName, setDecodedName] = useState("")

//   useEffect(() => {
//     //This follows the value of state
//     if(state.auth.token !== ""){
//       //I will decipher the token....
//       let decoded = jwtDecode(state.auth.token)

//       setDecodedName(decoded?.firstName)

//     }
//   }, [state]);

  const navigate = useNavigate();
  return (
    <div className="header-design">
      <div onClick={() => navigate("/")} className="logo-box-design">
        <img className="logo-design" src={logo} alt="idk" />
      </div>

      {/* {state.auth.token === "" ? ( */}
        <div className="header-buttons-design">
          <Surfer path={"/login"} destiny={"LOGIN"} />
          <Surfer path={"/register"} destiny={"REGISTER"} />
        </div>
      {/* ) : ( */}
        {/* <div className="header-buttons-design">
          <Surfer path={"/profile"} destiny={decodedName} />
          <div className="logout-design" >
            onClick={()=>SetAuth("token", "")}
            <Surfer path={"/"} destiny={"Log Out"} />
          </div>
        </div> */}
      {/* )} */}
    </div>
  );
}

export default Header;
