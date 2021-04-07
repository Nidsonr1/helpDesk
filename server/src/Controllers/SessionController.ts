import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";

class SessionController {
  async create(request: Request, response: Response) {
    const { email, password } = request.body;
    
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ email, password });

    if(!user) {
      return response.status(400).json({
        error: 'No User found'
      });
    }

    return response.json(user);
  }
}

export { SessionController }