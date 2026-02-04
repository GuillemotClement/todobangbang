import { Hono } from "hono";
import { auth } from "./lib/auth"; // path to your auth file
import { cors } from 'hono/cors'

const app = new Hono();

app.use('/api/*', cors({
    origin: 'http://localhost:5173',
    // AJOUT ICI : Content-Type est indispensable pour les requêtes JSON
    allowHeaders: ['Content-Type', 'Authorization', 'X-Custom-Header', 'Upgrade-Insecure-Requests'],
    allowMethods: ['POST', 'GET', 'OPTIONS'],
    exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
    maxAge: 600,
    credentials: true,
}))

app.get("/", (c) => {
	return c.text("Hello Hono!");
});

app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

export default app;
