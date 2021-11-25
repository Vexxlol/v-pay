import * as config from "../utils/config";

export const discord = {
    API_ENDPOINT: "https://discord.com/api/v7/",
    CLIENT_ID: config.DISCORD_CLIENT_ID,
    CLIENT_SECRET: config.DISCORD_CLIENT_SECRET,
    REDIRECT_URI: 'http://localhost:5000/api/v1/login/discord'
}

export const google = {
    BASE_OAUTH: 'https://accounts.google.com/o/oauth2/v2/auth',
    API_ENDPOINT: 'https://oauth2.googleapis.com/',
    CLIENT_ID: config.GOOGLE_CLIENT_ID,
    CLIENT_SECRET: config.GOOGLE_CLIENT_SECRET,
    REDIRECT_URI: 'http://localhost:5000/api/v1/login/google',
    ACCESS_TYPE: "offline",
    RESPONSE_TYPE: "code",
    PROMPT: "consent",
    SCOPE: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
    ].join(" "),
}

export const facebook = {
    API_ENDPOINT: '',
    CLIENT_ID: '',
    CLIENT_SECRET: '',
    REDIRECT_URI: 'http://localhost:5000/api/v1/login/facebook'
}

