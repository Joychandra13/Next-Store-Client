import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URL;

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("nextStore");

  await db.collection("products").insertOne({
    ...body,
    userEmail: session.user.email,
  });

  return NextResponse.json({ message: "Product added" });
}
