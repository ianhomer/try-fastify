import fastify, { FastifyInstance } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
import helloHandler from "./helloHandler";

export function create(): FastifyInstance {
  const server: FastifyInstance<
    Server,
    IncomingMessage,
    ServerResponse
  > = fastify();

  /* eslint-disable @typescript-eslint/no-var-requires */
  server.register(require("fastify-healthcheck"));

  // Add our route handler with correct types
  server.get("/", {}, helloHandler);

  return server;
}
