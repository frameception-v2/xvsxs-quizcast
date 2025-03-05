import { NextResponse } from "next/server";
import { NeynarAPIClient } from "@neynar/nodejs-sdk";
import { z } from "zod";

const QueryParamsSchema = z.object({
  fid: z.string().regex(/^\d+$/, "FID must be numeric"),
});

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const parsedParams = QueryParamsSchema.safeParse(Object.fromEntries(searchParams));
    
    if (!parsedParams.success) {
      return NextResponse.json(
        { error: parsedParams.error.format() },
        { status: 400 }
      );
    }

    const client = new NeynarAPIClient({
      apiKey: process.env.NEYNAR_API_KEY!
    });
    const casts = await client.fetchAllCastsCreatedByUser(parseInt(parsedParams.data.fid), {
      limit: 100,
    });

    return NextResponse.json({ casts });
  } catch (error) {
    console.error("Neynar API error:", error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
