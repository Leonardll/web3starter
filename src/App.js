import {React, useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Album from './pages/Album';
import Spotify from "./images/Spotify.png"
import './App.css';
import { Layout } from 'antd';
import {SearchOutlined, DownCircleOutlined} from '@ant-design/icons'
import AudioPlayer from './components/AudioPlayer';
const { Sider, Content, Footer} = Layout

const App = () => {

  const [nftAlbum, setNftAlbum] = useState(null)
  return(
    <Layout>
    <Layout>
      <Sider className='sideBar' width={300}>
        <img src={Spotify} className="logo" alt="" />
        <div className="searchBar">
          <span>Search</span>
          <SearchOutlined styled={{ fontSize: "30px"}} />
        </div>
        <Link to="/">
          <p style={{color:"#1DB954"}}>Home</p>
        </Link>
        <p>Your Music</p>
        <div className="recentPlayed">
          <p className="rencentTitle">Recently Played</p>
          <div className="install">
            <span>Install App</span>
            <DownCircleOutlined style={{fontSize:"30px"}} />
          </div>
        </div>
      </Sider>
    <Content>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/album" element={<Album setNftAlbum={setNftAlbum}  />} />
    </Routes>
    </Content>
    </Layout>
    <Footer>
      {nftAlbum && <AudioPlayer nftAlbum={nftAlbum} /> }
    </Footer>
    </Layout>
  )
};

export default App;