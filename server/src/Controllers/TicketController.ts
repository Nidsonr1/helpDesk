import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Ticket } from "../models/Tickets";

class TicketController {
  async create(request: Request, response: Response) {
    const { title, description } = request.body;

    const ticketRepository = getRepository(Ticket);

    const ticket = ticketRepository.create({
      title,
      description,
    });

    await ticketRepository.save(ticket);

    return response.status(202).json(ticket);
  };

  async index(request: Request, response: Response) {
    const id = request.params;

    const ticketRepository = getRepository(Ticket);

    const ticket  = await ticketRepository.find(id);

    if(!ticket) return response.status(404).json('Not Found');

    return response.status(200).json(ticket);
  };

  async show(request: Request, response: Response) {
    const ticketRepository = getRepository(Ticket);

    const tickets = await ticketRepository.find();

    return response.json(tickets);
  };

  async delete(request: Request, response: Response) {
    const id = request.params;

    const ticketRepository = getRepository(Ticket);

    const ticket = ticketRepository.findOne(id);

    if(!ticket) return response.status(404).json('ticket not already');

    await ticketRepository.delete(id);

    return response.json({ message: 'Ticket deletado com sucesso' });
  };

  async update(request: Request, response: Response) {
    const id = request.params;
    const { title, description } = request.body;

    const ticketRepository = getRepository(Ticket);

    const ticket = await ticketRepository.findOne(id);

    if(!ticket) return response.status(404).json('ticket not already');

    await ticketRepository.update(id, {
      title, 
      description
    });

    const newTicket = await ticketRepository.findOne(id);

    return response.json({
      message: 'Ticket atualizado com sucesso',
      newTicket
    });
  }
}

export { TicketController }