import { FastifyReply, FastifyRequest } from "fastify";
import { CreateNutritionServer } from "../services/CreateNutritionServer";

export interface DataProps {
  name: string;
  gender: string;
  weight: string;
  height: string;
  age: string;
  objective: string;
  level: string;
}

class CreateNutritionController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const props = request.body as DataProps;

    const createNutrition = new CreateNutritionServer();

    const nutrition = await createNutrition.execute(props);

    reply.send(nutrition);
  }
}

export { CreateNutritionController };
