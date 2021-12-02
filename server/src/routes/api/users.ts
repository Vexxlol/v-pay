/*

    TODO:
        - Set up balance, profile information route.

*/

import { prisma } from "../../utils/db/database";

const express = require('express');

let router = new express.Router();

router.get('/@me', async(req: any, res: any) => {
    
    // TODO: Fetch current user data 
    // !important - Token for this route

    res.send({
        id: 0,
        username: 'johndoe16',
        email: 'john@doe.com',
        tag: '0001',
        balance: 111.20
    })


    console.log("usesr/@me")

})

router.get('/:id', async(req: any, res: any) => {
    let d: any = await prisma.users.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    })

    if(!d) d = { username: "null" }

    res.send({
        id: req.params.id,
        username: d.username,
        tag: d.tag ? d.tag : "0000"
    })
})

export default router;