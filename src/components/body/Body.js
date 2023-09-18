import React from "react";
import "./Body.css";
// import Header from "./Header";
import { useStateValue } from "../../StateProvider";
import Podecast from "../Podecast/Podecast";



function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useStateValue();
    console.log(discover_weekly?.tracks.items, "data");

    const playPlaylist = (id) => {
        spotify
            .play({
                context_uri: `spotify:playlist:3HuOtPUHVhMC5fvBMsQ7YD`,
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
        console.log(id, "id");
        spotify.play({
            uris: [`spotify:track:${id}`],

        }).then((res) => {
            console.log(res, "playing");
            spotify.getMyCurrentPlayingTrack().then((r) => {
                console.log(r.item);
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
    return (<>
        <div style={{
            gap: '10px',
            padding: "40px 60px",
            display: 'flex', height: "100vh", flexWrap: 'wrap', flex: 1, background: '#1a1919', justifyContent: 'space-between', alignItems: 'center', scrollBehavior: 'smooth', overflowY: "scroll"
        }}>
            <h1></h1>
            {
                discover_weekly?.tracks.items.map((item) => (
                    <Podecast playSong={playSong} track={item.track} />
                ))
            }
        </div >
    </>

    );
}

export default Body;