import { PinataSDK } from "pinata-web3";

const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT,
  pinataGateway: process.env.GATEWAY_URL,
});

export const uploadPinata = async (str: string) => {
  try {
    const blob = new Blob([str]);
    const file = new File([blob], "metadata.json", { type: "text/plain" });
    const upload = await pinata.upload.file(file);
    return upload;
  } catch (error) {
    console.log(error);
  }
};
