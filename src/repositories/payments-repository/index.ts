import { prisma } from "@/config";
import { Payment } from "@prisma/client";

async function getPayment(ticketId: number) {
  // return prisma.enrollment.upsert();

  const payment = prisma.payment.findFirst({
    where: {
      ticketId,
    },
  });
  return payment;
}

const paymentsRepository = {
  getPayment,

};

export default paymentsRepository;
