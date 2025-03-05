import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { message: "Neynar API endpoint - Not implemented yet" },
    { status: 501 }
  );
}
