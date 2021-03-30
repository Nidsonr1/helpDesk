import { EntityRepository, Repository } from 'typeorm';
import { Ticket } from '../models/Tickets';

@EntityRepository(Ticket)
class TicketRepository extends Repository<Ticket> {}

export { TicketRepository }