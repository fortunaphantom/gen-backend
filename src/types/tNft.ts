export type tNft = {
  contractAddress: string;
  tokenId: string;
  chainId: number;
  metadata?: {[key: string]: any};
};
