import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { listPayment } from "@/controllers";

const paymentsRouter = Router();

paymentsRouter
  .all("/*", authenticateToken)
  .get("/", listPayment)
  .post("/process");

export { paymentsRouter };
