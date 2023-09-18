import React from 'react'
import './Podecast.scss'
import { AiFillPlayCircle } from 'react-icons/ai';
import { BiBorderRadius } from 'react-icons/bi';


const Podecast = ({ playSong, track }) => {
    console.log(track.id);
    return (
        <div className="card" >
            <iframe title='song'
                style={{ BorderRadius: "12px", }}
                src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator`}
                width="100%" height="153" allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
        </div>
    )
}

export default Podecast