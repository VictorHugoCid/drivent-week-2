import { prisma } from "@/config";
import { TicketStatus } from "@/protocols";
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

async function getTicketById(ticketId: number) {
  return await prisma.ticket.findFirst({
    where: {
      id: ticketId,
    },
  });
}

async function updateTicket(ticketId: number) {
  return prisma.ticket.update({
    where: {
      id: ticketId,
    },
    data: {
      status: "PAID",
    },
  });
}

const ticketsRepository = {
  findManyTicketTypes,
  findTicketByEnrollmentId,
  createTicket,
  findTicketTypeByTicketTypeId,
  getTicketById,
  updateTicket,
};

export default ticketsRepository;
