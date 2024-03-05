import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  const { userId, prompt, tag } = await res.json();

  try {
    await connectToDB();
    console.log("AMMO userId", session?.user.id);

    const newPrompt = new Prompt({
      creator: userId,
      tag,
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { statis: 500 });
  }
};
