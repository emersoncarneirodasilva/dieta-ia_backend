import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import routes from "./routes";

const PORT = 3333;

const app = Fastify({ logger: true });
dotenv.config();

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});

const start = async () => {
  app.register(cors);
  app.register(routes);

  try {
    await app.listen({ port: PORT, host: "0.0.0.0" });
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  } catch (error) {
    console.error(error);
  }
};

start();
