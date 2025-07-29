import { NextResponse } from "next/server";
import client from "@/lib/mongodb";

export const dynamic = 'force-dynamic';

export async function GET() {

  await client.connect();

  const mainDb = client.db(process.env.MONGODB_DBNAME || (process.env.VERCEL_ENV == "production" && "BlazeVortex-Prod") || "BlazeVortex-Dev");
  
  const users = mainDb.collection("SiteDisplayNames");
  const allUsers = await users.find({}).sort({ "priority": -1, "username": 1 }).toArray();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const serializedUsers = allUsers.map((user: any) => ({
    _id: user._id.toString(),
    selectedName: user.selectedName,
  }));

  return NextResponse.json(serializedUsers);
}
