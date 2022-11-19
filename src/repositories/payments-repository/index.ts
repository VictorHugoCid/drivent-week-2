import { prisma } from "@/config";
import { Payment } from "@prisma/client";

async function upsert(userId: number, createdEnrollment: 1, updatedEnrollment: 1) {
  // return prisma.enrollment.upsert();
}

const paymentsRepository = {
  upsert,
};

export default paymentsRepository;
