import express from "express";

import {
  add,
  subtract,
  multiply,
  devide,
} from "../controllers/calculation.controller.js";

import { isArray, checkIfIntegers } from "../utils/utils.js";

const router = express.Router();

router.use(function checkQuery(req, res, next) {
  if (!Object.keys(req.query).includes("arr"))
    return res.status(500).send(`Query doesn't contain arr object`);
  if (!isArray(req.query.arr))
    return res.status(500).send("Query object is not array");
  if (!checkIfIntegers(req.query.arr))
    return res.status(500).send("Not all items are numbers");
  next();
});

router.get("/add", add);
router.get("/subtract", subtract);
router.get("/multiply", multiply);
router.get("/devide", devide);

export default router;
