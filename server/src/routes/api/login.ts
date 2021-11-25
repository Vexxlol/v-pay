const express = require('express');
const emoji = require('node-emoji');
const fetch = require('node-fetch');

const queryString = require('query-string');


const { URLSearchParams } = require('url');

import { discord, google } from "../../constants/OAuth";
import { prisma } from "../../utils/db/database";

let router = new express.Router()

export default router;

router.get('/', async (req: any, res: any) => res.send({data: `Go, Away! ${emoji.get('imp')}`}))
router.get('/discord', async (req: any, res: any) => { 

    let session = req.session;

    let code: string = req.query.code;

    if (!code) return res.redirect("https://discord.com/oauth2/authorize?client_id=912962370966544384&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fapi%2Fv1%2Flogin%2Fdiscord&response_type=code&scope=identify%20email");
    // if (session) return res.redirect("/");


    let headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    const params = new URLSearchParams();
    params.append('client_id', discord.CLIENT_ID);
    params.append('client_secret', discord.CLIENT_SECRET);
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', discord.REDIRECT_URI);

    let response = await fetch(discord.API_ENDPOINT + 'oauth2/token', {
        method: "post",
        body: params,
        headers: headers
    })

    response = await response.json();

    /*

        TODO:
            - Incorporate the access_token, refresh_token, etc into db
            - Check if the email is in use.
            - Get userinformation.
            - Sessions
            - Decide DB Table  Structure


    */

    //console.log(response)
    if (!response.access_token) return res.send({ data: { error: 100, message: "Something went wrong, please try again later." } });

    let userData: any = await fetch(discord.API_ENDPOINT + "users/@me", {
        method: 'get',
        headers: {
            Authorization: `Bearer ${response.access_token}`
        }
    })

    userData = await userData.json();


    let d = await prisma.users.findFirst({
        where: {
            email: userData.email
        }
    })

    if (d) return res.send({ data: { error: 101, message: "Email already in use!" } }) // TODO: Log them in instead

    d = await prisma.users.create({
        data: {
            username: userData.username,
            tag: parseInt(`${Math.floor(Math.random() * 9 )}${Math.floor(Math.random() * 9 )}${Math.floor(Math.random() * 9 )}${Math.floor(Math.random() * 9 )}`),
            email: userData.email,
            avatar: `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}`
        }
    });

    res.send({ data: "Welcome to earth, " + d.username + "! " + emoji.get("alien") })

    session.user = d;

    console.log(session.user.username);


})


router.get("/google", async (req: any, res: any) => {

    let oauth = `${google.BASE_OAUTH}?${queryString.stringify({
        
        client_id: google.CLIENT_ID,
        redirect_uri: 'http://localhost:5000/api/v1/login/google',
        access_type: "offline",
        response_type: "code",
        prompt: "consent",
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email"
        ].join(" ") }
        
        )}`

    // console.log(oauth)
    if (!req.query.code) return res.redirect(oauth);
    
    
    let data = {
        client_id: google.CLIENT_ID,
        client_secret: google.CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: 'http://localhost:5000/api/v1/login/google'
    }

    let exchange = await fetch(google.API_ENDPOINT + `/token?${queryString.stringify(data)}`, {
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
    })

    exchange = await exchange.json();

    if (!exchange.access_token) return res.send({ data: { error: 100, message: "Something went wrong, try again later." } });

    let userData = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${exchange.access_token}`, {
        headers: {
            Authorization: `Bearer ${exchange.id_token}`
        }
    })

    if (!userData) return res.send({ data: { error: 100, message: "Something went wrong, try again later." } })

    userData = await userData.json();

    let d = await prisma.users.findFirst({
        where: {
            email: userData.email
        }
    })

    console.log(d)

    if (d) return res.send({ data: { error: 101, message: "Account already exist!" } }) // Log them instead

    let usr = await prisma.users.create({
        data: {
            username: userData.name,
            tag: parseInt(`${Math.floor(Math.random() * 9 )}${Math.floor(Math.random() * 9 )}${Math.floor(Math.random() * 9 )}${Math.floor(Math.random() * 9 )}`),
            email: userData.email,
            avatar: userData.picture
        }
    })

    res.send({ data: usr });
})


/*


{
  "data": {
    "code": "4/0AX4XfWgMp_15j1McRarw3K1KozL7BHB4G8QD_XhFDUlnaatCRO9KaTyO6LJ_5RBbUwYmVw",
    "scope": "email profile https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid",
    "authuser": "0",
    "prompt": "consent"
  }
}


*/