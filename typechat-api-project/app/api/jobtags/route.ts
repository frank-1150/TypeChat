import { NextResponse, NextRequest } from "next/server";
import { getJobTagResponse } from "../../typechat/main";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userInput = searchParams.get("userInput");
  if (!userInput) {
    return NextResponse.json({ error: "No user input" });
  }
  try {
    const modelReturn = await getJobTagResponse(userInput);
    console.log("model return", modelReturn);
    
    return NextResponse.json({ response: modelReturn });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
