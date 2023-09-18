import React, { useEffect, useState } from 'react'
import './Play.scss'
import { BiPause, BiPlay, BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import { useStateValue } from '../../StateProvider';




const Play = ({ spotify }) => {
    const [{ token, item, playing }, dispatch] = useStateValue();



    console.log(playing, "song is playing");
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);


    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((r) => {
            console.log(r);

            dispatch({
                type: "SET_PLAYING",
                playing: r.is_playing,
            });

            dispatch({
                type: "SET_ITEM",
                item: r.item,
            });
        });
    }, [spotify]);

    const handlePlayPause = () => {
        if (playing) {
            spotify.pause();
            dispatch({
                type: "SET_PLAYING",
                playing: false,
            });
        } else {
            spotify.play();
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
        }
    };

    const skipNext = () => {
        spotify.skipToNext();
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
    };

    const skipPrevious = () => {
        spotify.skipToPrevious();
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
    };







    return (
        <div className='play'>
            <div className='play__Left'>
                <img src={item?.album.images[0].url} alt={item?.name} />
                <div className='play__Info'>
                    <p >{item.name}</p>
                    <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
                </div>
            </div>
            <div className='play__middle' >
                <div className='play__middle--icon' >
                    <BiSkipPrevious size={window.innerWidth < 480 ? 30 : 40} />
                    {isPlaying ? <BiPause size={window.innerWidth < 480 ? 30 : 40} onClick={handlePlayPause} /> : <BiPlay size={window.innerWidth < 480 ? 30 : 40} onClick={handlePlayPause} />}

                    <BiSkipNext size={window.innerWidth < 480 ? 30 : 40} />
                </div>
                <div className='progress_container'>

                    <input type="range" className='progress' min="0" max={duration} value={currentTime} onChange={handlePlayPause} style={{ height: '2px', color: '#19C2E8' }} />


                </div>
            </div>
            {/* <div>
                < BiLike />
            </div> */}
        </div>
    )
}

export default Play