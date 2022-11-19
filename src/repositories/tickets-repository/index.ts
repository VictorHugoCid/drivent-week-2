import { prisma } from "@/config";
import { Ticket } from "@prisma/client";

async function findManyTicketTypes() {
  return prisma.ticketType.findMany();
}

async function findTicketByEnrollmentId(enrollmentId: number) {
  return prisma.ticket.findFirst({
    where: { enrollmentId },
    include: {
      TicketType: true,
    },
  });
}

async function findTicketTypeByTicketTypeId(ticketTypeId: number) {
  return prisma.ticketType.findFirst({
    where: {
      id: ticketTypeId,
    },
  });
}

async function createTicket(ticket: Omit<Ticket, "id" | "createdAt">) {
  const newTicket = await prisma.ticket.create({
    data: ticket,
    include: {
      TicketType: true,
    },
  });

  return newTicket;
}

const ticketsRepository = {
  findManyTicketTypes,
  findTicketByEnrollmentId,
  // findTicketByTicketTypeId,
  createTicket,
  findTicketTypeByTicketTypeId,
};

export default ticketsRepository;