import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const client = new MongoClient(process.env.MONGO_URL);
    await client.connect();
    const db = client.db("nextStore");
    const users = db.collection("users");

    // check existing user
    const exists = await users.findOne({ email });
    if (exists) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // save user
    await users.insertOne({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    await client.close();

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Signup Error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
