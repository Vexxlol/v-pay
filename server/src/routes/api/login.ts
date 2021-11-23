const express = require('express');
const emoji = require('node-emoji')

let router = new express.Router()

export default router;

router.get('/', async (req: any, res: any) => res.send({data: `Go, Away! ${emoji.get('imp')}`}))