// https://developer.spotify.com/documentation/web-playback-sdk/tutorials/getting-started

// this is end point where we send use to spotify api end point to authenticate user and 
// get back user with there credantials

export const authEndpoint = "https://accounts.spotify.com/authorize"

const redirectUri = "http://localhost:3000/"

const clientId = "a0c02a6a6e664caca8d21f4e58e5e0db"
// const Client_Secret = "5e6659e22dc04066a22c36101fd809b9"


const scopes = [
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-top-read",
    "user-read-recently-played",
    "playlist-read-private",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
};


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;