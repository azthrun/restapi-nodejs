import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Orders returned"
    });
});

router.post("/", (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: "Orders created",
        payload: order
    });
});

router.get("/:orderId", (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: `Order with Id, ${id}, returned`
    });
});

router.patch("/:orderId", (req, res, next) => {
    const id = req.params.orderId;
    res.status(202).json({
        message: `Order with Id, ${id}, updated`
    });
});

router.delete("/:orderId", (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: `Order with Id, ${id}, deleted`
    });
});

export default router;