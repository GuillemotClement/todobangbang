import { betterAuth} from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./drizzle";
import * as schema from "../db/schema";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg", // or "mysql", "sqlite"
		schema: schema
	}),
	emailAndPassword: {
		enabled: true,
	},
	trustedOrigins: [
        'http://localhost:5173' // L'URL de ton front Svelte
    ],
});
