import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User'
import { UsersRepository } from '../repositories/UsersRepository';

class UserController {
  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const userRepository = getRepository(User);

    const userAlreadyExists = await userRepository.findOne({ email });

    if(userAlreadyExists) {
      return response.status(400).json({
        error: 'User already exists'
      });
    }

    const user = userRepository.create({
      name, 
      email,
      password
    });

    await userRepository.save(user);

    return response.status(201).json(user);
  }
}

export { UserController }