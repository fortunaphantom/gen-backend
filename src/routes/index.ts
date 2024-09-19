import express from "express";
import { getOwnedNftsMethod, uploadHandler } from "../controllers/controller";

const router = express.Router();

router.get("/get-owned-nfts", getOwnedNftsMethod);
router.post("/upload", uploadHandler);

export default router;
