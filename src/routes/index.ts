import express from "express";
import logger from "../logger";

const router = express.Router();

router.get(["/", "/health", "/uptime"], (req, res) => res.status(200).json({ uptime: process.uptime() }));
// router.use(keyChecker); // stuff below requires api key
// router.use(auth) // stuff below requires auth

router.get("/users", async (req, res) => {
  return res.status(200).json("hi!");
});

export default router;
