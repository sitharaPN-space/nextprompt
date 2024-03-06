import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stingify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts", { status: 501 });
  }
};