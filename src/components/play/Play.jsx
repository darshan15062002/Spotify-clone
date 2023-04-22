import React, { useEffect, useState } from 'react'
import './Play.scss'
import { BiLike, BiPause, BiSkipNext, BiSkipPrevious } from 'react-icons/bi';


const podcasts =
{
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzaR0qzqsdEOASSWcp4cU4kIyYm66HfYdhyVTnYgkF2rfZoC8",
    name: "The Example Podcast",
    description: "A podcast about examples",
    category: "Education",
    audioFile: "https://example.com/podcast1.mp3",
    artistName: "John Doe",
    artistImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
}

const Play = () => {
    const [audio] = useState(new Audio('/path/to/audio/file.mp3'));
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        // Set up event listeners for the audio element
        audio.addEventListener('play', () => setIsPlaying(true));
        audio.addEventListener('pause', () => setIsPlaying(false));
        audio.addEventListener('timeupdate', () => setCurrentTime(audio.currentTime));
        audio.addEventListener('durationchange', () => setDuration(audio.duration));

        // Clean up event listeners when the component unmounts
        return () => {
            audio.removeEventListener('play', () => setIsPlaying(true));
            audio.removeEventListener('pause', () => setIsPlaying(false));
            audio.removeEventListener('timeupdate', () => setCurrentTime(audio.currentTime));
            audio.removeEventListener('durationchange', () => setDuration(audio.duration));
        };
    }, [audio]);

    const togglePlay = () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
    };

    const handleProgressChange = (event) => {
        const newTime = event.target.value;
        audio.currentTime = newTime;
        setCurrentTime(newTime);
    };

    return (
        <div className='play'>
            <div className='play__Left'>
                <img src={podcasts.image} alt="song_img" />
                <div className='play__Info'>
                    <p >{podcasts.name}</p>
                    <p >{podcasts.artistName}</p>
                </div>
            </div>
            <div className='play__middle' >
                <div >
                    <BiSkipPrevious />
                    <BiPause />
                    <BiSkipNext />
                </div>
                <div>

                    <input type="range" min="0" max={duration} value={currentTime} onChange={handleProgressChange} />
                    <audio src={"bk"} ></audio>

                </div>
            </div>
            <div>
                < BiLike />
            </div>
        </div>
    )
}

export default Play