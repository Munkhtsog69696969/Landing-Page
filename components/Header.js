import "./css/Header.css"
import { useLocation } from "react-router-dom"
import {useEffect, useState,useRef} from  "react"
import {Link} from "react-router-dom"
import { useContext } from "react"
import { ThemeChange } from "../App"



export const Header=(props)=>{
    const {Clicked,change}=useContext(ThemeChange)
    let [teamLogoBool,setTeamLogo]=useState(false);
    let texts=useRef(false);
    let location=useLocation();

    useEffect(()=>{
        if(location.pathname=="/"){
            teamLogoBool=true;
            setTeamLogo(teamLogoBool);
            texts.current=true;
        }else{
            teamLogoBool=false;
            setTeamLogo(teamLogoBool);
            texts.current=false;
        }
    },[location]);

    return(
        <div className="Header">

            <div className="Header1">
                <Link to="/">
                    {/* <img src={teamLogoBool ? props.teamLogo : props.teamLogo1}/> */}
                    <img src={change ? props.teamLogo : props.teamLogo1}/>
                </Link>
            </div>

            <div className="Header2">
                {/* <CgCircleci className="switch"></CgCircleci> */}
                {/* <Link to="/product" className={texts.current? "texts" :"texts-true"}>Products</Link>
                <Link to="/services" className={texts.current? "texts" :"texts-true"}>Services</Link>
                <Link to="/contact" className={texts.current? "texts" :"texts-true"}>Contact</Link>
                <Link to="/login" className={texts.current? "texts" :"texts-true"}>Login</Link>
                 */}
                <Link to="/product" className={change? "texts" :"texts-true"}>Products</Link>
                <Link to="/services" className={change? "texts" :"texts-true"}>Services</Link>
                <Link to="/contact" className={change? "texts" :"texts-true"}>Contact</Link>
                <Link to="/login" className={change? "texts" :"texts-true"}>Login</Link>
                <img src={texts.current ? props.getAccess : props.getAccess1}/>
            </div>
        </div>
    )
}