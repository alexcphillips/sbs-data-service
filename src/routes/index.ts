import express from "express";
import { getProfilesByUsername } from "../sb/profiles";

const router = express.Router();

router.get(["/", "/health", "/uptime"], (req, res) => res.status(200).json({ uptime: process.uptime() }));
// router.use(keyChecker); // stuff below requires api key
// router.use(auth) // stuff below requires auth

router.get("/profiles/:username", async (req, res) => {
  const data = await getProfilesByUsername(req.params.username);
  return res.status(200).json(data);
});

// router.get("/profiles/:username/:profileName", async (req, res) => {
//   const data = await getProfile(req.params.username, req.params.profileName);
//   return res.status(200).json(data);
// });

export default router;
