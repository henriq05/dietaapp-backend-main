import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateChefiaService } from '../services/CreateChefiaService'

export interface DataProps{
  name: string;
  weight: string;
  height: string;
  age: string;
  gender: string;
  objective: string;
  level: string;
}

class CreateChefiaController{
  async handle(request: FastifyRequest, reply: FastifyReply){
    const { name, weight, height, age, gender, objective, level } = request.body as DataProps;

    const createNutrition = new CreateChefiaService();

    const nutrition = await createNutrition.execute({
      name,
      weight,
      height,
      age,
      objective,
      gender,
      level,
    });

    reply.send(nutrition);

  }
}

export { CreateChefiaController }