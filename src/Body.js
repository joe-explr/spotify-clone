import React from 'react';
import { useStateValue } from './StateProvider';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Header  from './Header';
import SongRow from './SongRow';
import './Body.css';

function Body({spotify}) {
  const [{discover_weekly},dispatch]= useStateValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        // console.log("PlayingSong",res);
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  return (
    <div className="body_player">
    <Header spotify={spotify} />

    <div className="body__info">
      <img src={discover_weekly?.images[0]?.url} alt="" />
      <div className="body__infoText">
        <strong>PLAYLIST</strong>
        <h1>Discover Weekly</h1>
        <p>{discover_weekly?.description}</p>
      </div>
    </div>
    <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteBorderIcon className='body_fav' fontSize="large" />
          <MoreHorizIcon />
        </div>
        <table className='playlist_table'>
          <thead >
          <tr className='table_heading'>
          <th>#</th>
          <th>TITLE</th>
          <th>ALBUM</th>
          <th>DATE ADDED</th>
          <th><AccessTimeIcon /></th>
          </tr>
          </thead>
          <tbody>
        {discover_weekly?.tracks.items.map((item,index) => (
          <SongRow id={index+1} playSong={playSong} item={item} key={index}/>
        ))}
        </tbody>
        </table>
        <br/>
        <br/>
        <br/>
        <hr/>
        <br/>
        <br/>
      </div>
    </div>
  )
};

export default Body;