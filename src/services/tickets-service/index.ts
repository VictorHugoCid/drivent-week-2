import {  TicketTypeEntity } from "@/protocols";
import { invalidDataError, notFoundError } from "@/errors";
import ticketsRepository from "@/repositories/tickets-repository";
import enrollmentRepository from "@/repositories/enrollment-repository";
import { Ticket } from "@prisma/client";

async function getTicketTypes(): Promise<TicketTypeEntity[]> {
  return await ticketsRepository.findManyTicketTypes();
}

async function getTicketByUserId(userId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);

  if (!enrollment) {
    throw notFoundError();
  }

  const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id);

  if (!ticket) {
    throw notFoundError();
  }

  return ticket;
}

async function getTicketTypeByTicketTypeId(ticketTypeId: number) {
  const ticketType = await ticketsRepository.findTicketTypeByTicketTypeId(ticketTypeId);

  return ticketType;
}

async function insertTicket(ticketTypeId: number, userId: number) {
  //verificar body
  if (!ticketTypeId) {
    throw invalidDataError;
  }

  //verificar user sem cadastro
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);

  if (!enrollment) {
    throw notFoundError();
  }

  const newTicket: Omit<Ticket, "id" | "createdAt"> = {
    status: "RESERVED",
    ticketTypeId,
    enrollmentId: enrollment.id,
    updatedAt: new Date(),
  };

  return await ticketsRepository.createTicket(newTicket);
}

const ticketsService = {
  getTicketTypes,
  getTicketByUserId,
  getTicketTypeByTicketTypeId,
  // getTicketByticketTypeId,
  insertTicket,
};

export default ticketsService;
