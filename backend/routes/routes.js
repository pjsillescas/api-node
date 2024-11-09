import express from 'express';

const router = express.Router({ mergeParams: true });

router.get("/data",(req,res) => res.json([{ x: 0, s:"asdf",}, {x: 1, s:"qwer" }]));

router.get("*", (req, res) => res.status(404).json());

export default router;