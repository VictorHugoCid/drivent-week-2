import { invalidDataError, notFoundError, unauthorizedError } from "@/errors";
import paymentsRepository from "@/repositories/payments-repository";
import ticketsRepository from "@/repositories/tickets-repository";
import enrollmentsRepository from "@/repositories/enrollment-repository";

async function getPayment(ticketId: number, userId: number) {
  if (!ticketId) {
    throw invalidDataError;
  }

  const ticket = await ticketsRepository.getTicketById(ticketId);

  if (!ticket) {
    throw notFoundError();
  }

  const enrollment = await enrollmentsRepository.findEnrollmentByUserId(userId);

  if (enrollment.id !== ticket.enrollmentId) {
    throw unauthorizedError();
  }

  const payment = await paymentsRepository.getPayment(ticketId);

  return payment;
}
const paymentsService = {
  getPayment,
};

export default paymentsService;
