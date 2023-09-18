import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import '../Home/Home.scss'

import Play from '../../components/play/Play'
import { SearchContext } from '../../context/SearchContext'

import { getTokenFromResponse } from '../../spotify'

// this npm package help us to comunicate with spotify api 
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from '../../StateProvider'
import Body from '../../components/body/Body'



// intance spotify
const s = new SpotifyWebApi();


const Home = () => {
    const [{ token_, playing }, dispatch] = useStateValue();
    console.log("curr plaing song------------------------------------------", playing);


    const [token, setToken] = useState(null)
    const [login, setLoggIn] = useState(false)
    const [nowPlaying, setNowPlaying] = useState({})
    const { search, setSearch } = useContext(SearchContext);



    useEffect(() => {
        // Set token
        const _token = getTokenFromResponse().access_token;
        // clean use=l from brwser as soon as posible because it contains credentials
        window.location.hash = "";

        if (_token) {
            setToken(_token)
            setLoggIn(true)
            s.setAccessToken(_token)

            dispatch({
                type: "SET_TOKEN",
                token: _token,
            });

            s.getPlaylist("4JZFUSM0jb3RauYuRPIUp8").then((response) =>

                dispatch({
                    type: "SET_DISCOVER_WEEKLY",
                    discover_weekly: response,
                })
            );

            s.getMyTopArtists().then((response) =>
                dispatch({
                    type: "SET_TOP_ARTISTS",
                    top_artists: response,
                })
            );

            dispatch({
                type: "SET_SPOTIFY",
                spotify: s,
            });

            s.getMe().then((user) => {
                console.log(user);
                dispatch({
                    type: "SET_USER",
                    user,
                });
            });

            s.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: "SET_PLAYLISTS",
                    playlists,
                });
            });



        }




    }, [token_, dispatch])





    return (
        <div className='home'>
            <div className="home__main">
                <Sidebar />

                {token ? (

                    <Body spotify={s} />
                ) : (
                    <h1>No song</h1>

                )
                }
            </div>
            {playing && <Play spotify={s} />}



        </div >

    )
}

export default Home