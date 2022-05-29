import express from "express";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";

const router = express.Router();
const apiKey = 'wo4E4ilH0jjTv_Zu0QqwUWNdCToeNcpw';
const web3 = createAlchemyWeb3(`https://eth-mainnet.alchemyapi.io/v2/${apiKey}`);

router.get("/getOwnedNfts/:ownerAddress", async (req, res, next) => {
    const address = req.params.ownerAddress;

    const apiResponse = await web3.alchemy.getNfts({ owner: address });

    res.status(200).json({
        message: `NFT with owner address, ${address},returned`,
        payload: apiResponse
    });
});

router.get("/getNft/:contractAddress/:tokenId", async (req, res, next) => {
    const tokenId = req.params.tokenId;
    const address = req.params.contractAddress;

    const nftResponse = await web3.alchemy.getNftMetadata({
            contractAddress: '0x5180db8F5c931aaE63c74266b211F580155ecac8',
            tokenId: '1590'
        });

    res.status(200).json({
        message: `NFT with Id, ${tokenId}, and address, ${address}, returned`,
        payload: {
            title: nftResponse.title,
            imageUrl: nftResponse.metadata.image
        }
    });
});

export default router;