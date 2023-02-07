import React from 'react'
import './SongRow.css'

const Songrow = ({ id, item, playSong }) => {
    return (
      <tr className="songRow" onClick={() => playSong(item.track.id)} key={id}>
        <td>{id}</td>
        <td className='song_title'><img className="songRow__album" src={item.track.album.images[0].url} alt="" />
        <div className="songRow__info">
          <h4>{item.track.name}</h4>
          <p>
            {item.track.artists.map((artist) => artist.name).join(", ")} -{" "}
          </p>
        </div>
        </td>
        <td>{item.track.album.name}</td>
        <td>{date_conv(item.added_at)}</td>
        <td>{duration(item.track.duration_ms)}</td>
      </tr>
    );
}
function date_conv(dateStamp){
    const d= new Date(dateStamp);
    let date=d.toDateString().substring(3);
    return date;
}
function duration(seconds){
    const s= Math.round(seconds/1000);
    const dur= `${Math.round(s/60)}:${s%60>9?s%60:'0'+s%60 }`;
    return dur;
}

export default Songrow