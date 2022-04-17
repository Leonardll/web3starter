import "./Album.css"
import { useLocation } from "react-router-dom";
import Opensea from "../images/opensea.png"
import {ClockCircleOutlined} from "@ant-design/icons"
const Album = () => {

    const {state:album} = useLocation()
    return (
        <>
        <div className="topBan">
            <img src={album.image} height={"140px"} alt="albumcover" className="albumCover" />
            <div className="albumDeets">
                <div>Album</div>
                <div className="title">{album.title}</div>
            </div>
        </div>
        <div className="topBan">
            <div className="playButton" onClick={() => console.log("startMusic")}>PLAY</div>
        <div className="openButton"
        onClick={() => window.open (
            `https://testnets.opensea.io/assets/mumbai/${album.contract/1}`
        )}>
            OpenSea
            <img src={Opensea} alt="" className="openLogo" />
        </div>
        </div>
        <div className="tableHeader">
            <div className="numberHeader">#</div>
                <div className="titleHeader">Title</div>
                  <div className="numberHeader">
                     <ClockCircleOutlined />
                  </div>
        </div>
        <div className="tableContent">
            <div className="numberHeader"></div>
            <div className="titleHeader" style={{color:"rgb(205,203,203"}}>

            </div>
            <div className="numberHeader">
                
            </div>
        </div>
        </>
    )
}

export default Album;