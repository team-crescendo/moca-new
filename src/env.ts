import dotenv from 'dotenv';
import { z } from 'zod'

dotenv.config();

export const envSchema = z.object({
    DISCORD_TOKEN: z.string().regex(/[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+/g)
});

const parsing = envSchema.safeParse(process.env);

if (!parsing.success) {
    console.error("=== Invalid .env ===");
    console.error(z.prettifyError(parsing.error));
    process.exit(1);
}

export const env = parsing.data;
export type Env = z.infer<typeof envSchema>;