import "./Album.css"
import { useLocation } from "react-router-dom";
import {useAlbum} from '../hooks/useAlbum'
import Opensea from "../images/opensea.png"
import {ClockCircleOutlined} from "@ant-design/icons"
const Album = ({setnftAlbum}) => {

    const {state:albumDetails} = useLocation()
    const { album} = useAlbum(albumDetails.contract)
    
    return (
        <>
        <div className="topBan">
            <img src={albumDetails.image} height={"140px"} alt="albumcover" className="albumCover" />
            <div className="albumDeets">
                <div>Album</div>
                <div className="title">{albumDetails.title}</div>
                <div className="artist">
                    {albumDetails && JSON.parse(album[0].metadata).artist}
                </div>
                <div>
                    {album && JSON.parse(album[0].metadata).year} {''}
                    {album && album.length} Songs
                </div>
            </div>
        </div>
        <div className="topBan">
            <div className="playButton" onClick={() => setnftAlbum([])}>PLAY</div>
        <div className="openButton"
        onClick={() => window.open (
            `https://testnets.opensea.io/assets/mumbai/${albumDetails.contract/1}`
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
        {album && album.map((nft, i) => {
            nft = JSON.parse(nft.metadata)
            return (
                <>
        <div className="tableContent">
            <div className="numberHeader">{i + 1}</div>
            <div className="titleHeader" style={{color:"rgb(205,203,203"}}>
                {nft.name}
            </div>
            <div className="numberHeader">
            {nft.duration}
            </div>
        </div>
                </>
            )
        })}
        </>
    )
}

export default Album;