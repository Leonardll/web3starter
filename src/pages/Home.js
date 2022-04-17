import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs } from 'antd';
import { library} from "../helpers/albumList"
import  "./Home.css"
const {TabPane} = Tabs;
const Album = () => {
  
  return (
  <>
  <Tabs defaultActiveKey='1' centered>
    <TabPane tab="Featured" key="1">
      <h1 className="featuredTitle">Today Is The Day</h1>
      <div className="albums">
        {library.map((item) => (
          <Link to="/album" state={item} className="albumSelection">
            <img 
            src={item.image} 
            alt="bull"
            style={{width:"150px",height:"130px", marginBottom:"10px"}} />
          <p>{item.title}</p>
          </Link>
        ))}
      </div>
    </TabPane>
    <TabPane tab="Genres & Moods" key="2">
      <h1 className="featuredTitle">Pop hits</h1>
      <div className="albums">
        {library.slice(7,13).map((item) => (
          <Link to="/album" state={item} className="albumSelection">
            <img 
            src={item.image} 
            alt="bull"
            style={{width:"150px",height:"130px", marginBottom:"10px"}} />
          <p>{item.title}</p>
          </Link>
        ))}
      </div>
      <h1 className="featuredTitle">R&B</h1>
      <div className="albums">
        {library.slice(1,6).map((item) => (
          <Link to="/album" state={item} className="albumSelection">
            <img 
            src={item.image} 
            alt="bull"
            style={{width:"150px",height:"130px", marginBottom:"10px"}} />
          <p>{item.title}</p>
          </Link>
        ))}
      </div>
      <h1 className="featuredTitle">Rap</h1>
      <div className="albums">
        {library.slice(5,11).map((item) => (
          <Link to="/album" state={item} className="albumSelection">
            <img 
            src={item.image} 
            alt="bull"
            style={{width:"150px",height:"130px", marginBottom:"10px"}} />
          <p>{item.title}</p>
          </Link>
        ))}
      </div>
      <h1 className="featuredTitle">Afro Trap</h1>
      <div className="albums">
        {library.slice(9,13).map((item) => (
          <Link to="/album" state={item} className="albumSelection">
            <img 
            src={item.image} 
            alt="bull"
            style={{width:"150px",height:"130px", marginBottom:"10px"}} />
          <p>{item.title}</p>
          </Link>
        ))}
      </div>
      <h1 className="featuredTitle">Pop hits</h1>
      <div className="albums">
        {library.slice(10,13).map((item) => (
          <Link to="/album" state={item} className="albumSelection">
            <img 
            src={item.image} 
            alt="bull"
            style={{width:"150px",height:"130px", marginBottom:"10px"}} />
          <p>{item.title}</p>
          </Link>
        ))}
      </div>
    </TabPane>
    <TabPane tab="New Releases" key="3">
    <h1 className="featuredTitle">Hip-Hop</h1>
      <div className="albums">
        {library.map((item) => (
          <Link to="/album" state={item} className="albumSelection">
            <img 
            src={item.image} 
            alt="bull"
            style={{width:"150px",height:"130px", marginBottom:"10px"}} />
          <p>{item.title}</p>
          </Link>
        ))}
      </div>
    </TabPane>
  </Tabs>
  
  
  </>
)
}

export default Album;