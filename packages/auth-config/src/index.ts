import { betterAuth } from 'better-auth';
import { toNodeHandler, fromNodeHeaders } from 'better-auth/node';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { prisma } from '@monorepo/database';

// Import the type for betterAuth if available
import type { betterAuth as BetterAuthType } from 'better-auth';

export const auth: ReturnType<typeof BetterAuthType> = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
  },
  paths: {
    signIn: '/api/auth/signin',
    signUp: '/api/auth/signup',
    signOut: '/api/auth/signout',
    callback: '/api/auth/callback/:provider',
  },
});

export { toNodeHandler, fromNodeHeaders };
