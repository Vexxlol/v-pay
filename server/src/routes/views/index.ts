const express = require('express');
const emoji = require('node-emoji');

const router = new express.Router();

router.get('/', (req: any, res: any) => res.send({data: `Welcome, to Earth! ${emoji.get('alien')}${emoji.get('raised_hands')}`}))

export default router;