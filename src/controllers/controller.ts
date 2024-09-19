import { Request, Response } from "express";
import Moralis from "moralis";
import { EvmAddressInput, EvmChain } from "@moralisweb3/common-evm-utils";
import { tNft } from "../types/tNft";
import { getOwnedNfts } from "../services/getOwnedNfts";
import { uploadPinata } from "../services/uploadPinata";
import { metadata, metadataUris } from "../config/metadata";

export const getOwnedNftsMethod = async (req: Request, res: Response) => {
  const address = "0x26fcbd3afebbe28d0a8684f790c48368d21665b5";
  // const address = req.query.address as EvmAddressInput; // "0x26fcbd3afebbe28d0a8684f790c48368d21665b5";
  const allNFTs: tNft[] = await getOwnedNfts(address);
  res.json(allNFTs);
};

export const uploadHandler = async (req: Request, res: Response) => {
  // const upload = await uploadPinata(
  //   JSON.stringify(metadata[Math.round(Math.random() * 1000) % metadata.length])
  // );

  const url =
    metadataUris[Math.round(Math.random() * 1000) % metadataUris.length];
  res.json({ url });
};
