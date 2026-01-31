import { Hono } from "hono";
import { auth } from "./lib/auth"; // path to your auth file

const app = new Hono();

app.get("/", (c) => {
	return c.text("Hello Hono!");
});

app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

export default app;
