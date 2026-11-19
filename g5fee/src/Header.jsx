import React, { useEffect, useState } from "react";
import { BiSun} from "react-icons/bi";
export function Header() {
    const [dark, setDark] = useState(false);
    useEffect(() => {
        if (dark) {
            document.body.style.backgroundColor = "#000";
            document.body.style.color = "#fff";
        } else {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "skyblue";
        }
    }, [dark]);
    function handleClick() {
        setDark(!dark);
    }
    return (
        <div
        className="fx"
        style={{
            height: "4rem",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            top: "0px",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid #ccc",
        }}
        >
            <div className="fx" style={{ fontSize:"2rem", color:"gold"}}>
                &#9812;
            
        </div>
        <div className="fx">
            <input
            className="fs1"
            style={{ borderRadius:"15px"}}
            type="text"
            placeholder="Search"
            />
        </div>
         <div className="fx">
            <a href="#">Link1</a>
            <a href="#">Link2</a>
            <a href="#">Link3</a>
        </div>
        <div className="fx">
            <button 
className="btn4 fyc fs5"
 onClick={handleClick}
 style={{ background: "transparent", color:"gold"}}
 >
    <BiSun />
 </button>
        </div>
        </div>
    );
}