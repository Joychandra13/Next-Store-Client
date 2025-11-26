import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URL;

async function connectDB() {
  const client = new MongoClient(uri);
  await client.connect();
  return client.db("nextStore"); // FINAL FIX — your actual DB name
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",

      async authorize(credentials) {
        const db = await connectDB();

        // SAME COLLECTION FOR ALL USERS
        const users = db.collection("users");

        const user = await users.findOne({ email: credentials.email });
        if (!user) return null;

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) return null;

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const db = await connectDB();
        const users = db.collection("users");

        const exists = await users.findOne({ email: user.email });

        if (!exists) {
          await users.insertOne({
            name: user.name,
            email: user.email,
            photo: user.image,
            password: null,
            provider: "google",
            createdAt: new Date(),
          });
        }
      }
      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
