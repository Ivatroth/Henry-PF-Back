const { Router } = require("express");

const productRouter = require("./productRouter");
const categoryRouter = require("./categoriesRouter");
const loginRouter = require("./loginRouter");
const orderRouter = require("./orderRouter");
const userRouter = require("./userRouter");
const adminRouter = require("./adminRouter");

const mainRouter = Router();

mainRouter.use("/product", productRouter);
mainRouter.use("/categories", categoryRouter);
mainRouter.use("/order", orderRouter);
mainRouter.use("/users", userRouter);
mainRouter.use("/user", loginRouter);
mainRouter.use("/admin", adminRouter);

module.exports = mainRouter;
