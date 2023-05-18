import type { FastifyServerOptions } from "fastify";
import Fastify from "fastify";
import * as t from "runtypes";

import { ADDRESS, PORT } from "./config";
import { logger } from "./logger";
import {
  createMessage,
  createUser,
  messages as fetchMessages,
} from "./actions";

const options: FastifyServerOptions = {
  trustProxy: true,
  logger,
};

const fastify = Fastify(options);

fastify.get("/api/health_check", {
  async handler(request, reply) {
    request.log.info({
      query: request.query,
      body: request.body,
    });

    reply.status(204).send();
  },
});

const MessagesBody = t.Record({
  ids: t.Array(t.String),
});

// example request: /api/messages?ids=foo&ids=bar
fastify.get("/api/messages", {
  async handler(request, reply) {
    const query = MessagesBody.validate(request.query);
    if (!query.success) {
      reply.status(400).send({ error: "VALIDATION_FAILED" });
    } else {
      const { ids } = query.value;

      const messages = await fetchMessages({ ids });

      reply.status(200).send({
        messages,
      });
    }
  },
});

const CreateMessageBody = t.Record({
  type: t.Union(t.Literal("email"), t.Literal("sms")),
  subject: t.String.optional(), // Required for email
  text: t.String,
  channel_id: t.String,
  brand_id: t.String,
});

fastify.post("/api/create_message", {
  async handler(request, reply) {
    const body = CreateMessageBody.validate(request.body);
    if (!body.success) {
      reply.status(400).send({ error: "VALIDATION_FAILED" });
    } else {
      const message = await createMessage(body.value);

      reply.status(200).send({
        message,
      });
    }
  },
});

const CreateUserBody = t.Record({
  role: t.Union(t.Literal("admin"), t.Literal("manager"), t.Literal("user")),
  first_name: t.String,
  last_name: t.String,
  brand_id: t.String,
});

fastify.post("/api/create_user", {
  async handler(request, reply) {
    const body = CreateUserBody.validate(request.body);
    if (!body.success) {
      reply.status(400).send({ error: "VALIDATION_FAILED" });
    } else {
      const user = await createUser(body.value);

      reply.status(200).send({
        user,
      });
    }
  },
});

fastify.listen({ port: PORT, host: ADDRESS }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  } else {
    fastify.log.info(`Server is now listening on ${address}`);
  }
});

export const server = fastify;
