const express = require('express');
const emoji = require('node-emoji')

let router = new express.Router()

export default router;

router.get('/', async (req: any, res: any) => res.send({ data: `Stop, Snooping! ${emoji.get('closed_lock_with_key')}${emoji.get('cop')}` }))

router.get('/send', async (req: any, res: any) => res.send({ data: `Woah, floating money! ${emoji.get("money_with_wings")}` }))

router.get('/invoice', async (req: any, res: any) => res.send({ data: `Woah, you owe the IRS $500,000 ${emoji.get("moneybag")}` }));