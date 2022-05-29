import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

import productRoutes from "./api/routes/products.js";
import orderRoutes from "./api/routes/orders.js";
import nftRoutes from "./api/routes/nfts.js";

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/nfts", nftRoutes);

app.use((req, res, next) => {
    const error = new Error("NOT FOUND");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500)
        .json({
            error: {
                message: error.message,
                code: error.code
            }
        });
});

export default app;