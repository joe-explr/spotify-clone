import React from 'react';
import SideOptions from './SideOptions';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useStateValue } from "./StateProvider";

import './Sidebar.css'

const Sidebar = () => {
  const [{playlists},dispatch]= useStateValue();
  // console.log("Playlists", playlists);
  return (
    <div className='sideBar'>
     <img  src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo"/>

     <SideOptions Icon={HomeSharpIcon} option="Home" />
     <SideOptions Icon={SearchIcon} option="Search" />
     <SideOptions Icon={LibraryMusicIcon} option="Your Library" />
     <br/>
     <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
      <SideOptions option={playlist.name} />
      ))}
      </div>
  )
}

export default Sidebar