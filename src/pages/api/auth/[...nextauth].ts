import NextAuth, { Account, User } from 'next-auth';
import { AppProviders } from 'next-auth/providers';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { prisma } from 'server/prisma';

import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

const providers: AppProviders = [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  }),
];

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers,
  debug: process.env.NODE_ENV === 'development',
});
