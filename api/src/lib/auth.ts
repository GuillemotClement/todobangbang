import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import * as schema from "../db/schema";
import { db } from "./drizzle";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg", // or "mysql", "sqlite"
		schema: schema,
	}),
	emailAndPassword: {
		enabled: true,
	},
	trustedOrigins: [
		"http://localhost:5173", // L'URL de ton front Svelte
	],
});
