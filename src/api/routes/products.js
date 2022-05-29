import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Products returned"
    });
});

router.post("/", (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message: "Products created",
        payload: product
    });
});

router.get("/:productId", (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: `Product with Id, ${id}, returned`
    });
});

router.patch("/:productId", (req, res, next) => {
    const id = req.params.productId;
    res.status(202).json({
        message: `Product with Id, ${id}, updated`
    });
});

router.delete("/:productId", (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: `Product with Id, ${id}, deleted`
    });
});

export default router;