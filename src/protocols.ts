export type ApplicationError = {
  name: string;
  message: string;
};

export type ViaCEPAddress = {
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
};

export type AddressEnrollment = {
  logradouro: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  error?: string;
};

export type RequestError = {
  status: number;
  data: object | null;
  statusText: string;
  name: string;
  message: string;
};

export type TicketTypeEntity = {
  id: number;
  name: string;
  price: number;
  isRemote: boolean;
  includesHotel: boolean;
  createdAt: Date;
  updatedAt: Date;
};

// export type TicketEntity = {
//   id: number,
//   status: TicketStatus, //RESERVED | PAID
//   ticketTypeId: number,
//   enrollmentId: number,
//   TicketType: TicketTypeEntity,
//   createdAt: Date,
//   updatedAt: Date,

// }
export type TicketEntity = {
  status: TicketStatus; //RESERVED | PAID
  ticketTypeId: number;
  enrollmentId: number;
};

export enum TicketStatus {
  RESERVED,
  PAID,
}

