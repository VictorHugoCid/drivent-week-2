import { Router } from "express";
import { authenticateToken } from "@/middlewares";

const paymentsRouter = Router();

paymentsRouter
  .all("/*", authenticateToken)
  .get("/?ticketId" /* função aqui */)
  .post("/process");

export { paymentsRouter };
