import express from "express";
import * as profiles from "./profiles";

const router = express.Router();

router.get(["/", "/health", "/uptime"], (req, res) => res.status(200).json({ uptime: process.uptime() }));

// Profile data
router.get("/:username/profiles", profiles.getUserProfiles);
router.get("/:username/:profileName/networth", profiles.getNetworth);

export default router;
