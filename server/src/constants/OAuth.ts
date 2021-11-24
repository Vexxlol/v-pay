import * as config from "../utils/config";

export const discord = {
    API_ENDPOINT: "https://discord.com/api/v7/",
    CLIENT_ID: config.DISCORD_CLIENT_ID,
    CLIENT_SECRET: config.DISCORD_CLIENT_SECRET,
    REDIRECT_URI: 'http://localhost:5000/api/v1/login/discord'
}

export const google = {
    API_ENDPOINT: '',
    CLIENT_ID: '',
    CLIENT_SECRET: '',
    REDIRECT_URI: 'http://localhost:5000/api/v1/login/google'
}

export const facebook = {
    API_ENDPOINT: '',
    CLIENT_ID: '',
    CLIENT_SECRET: '',
    REDIRECT_URI: 'http://localhost:5000/api/v1/login/facebook'
}