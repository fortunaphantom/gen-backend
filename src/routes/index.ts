import express from "express";
import { getOwnedNfts } from "../controllers/controller";

const router = express.Router();

router.get("/get-owned-nfts", getOwnedNfts);

export default router;
