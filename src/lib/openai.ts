import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateImagePrompt(name: string) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a creative and helpful AI assistant capable of generating interesting thumbnail descriptions for my notes. Your output will be fed into the DALL·E API to generate a thumbnail. The description should be minimalistic and flat-styled.",
        },
        {
          role: "user",
          content: `Please generate a thumbnail description for my notebook titled "${name}".`,
        },
      ],
    });

    if (!response.choices || !response.choices[0]) {
      throw new Error("Invalid response structure from OpenAI API");
    }

    const image_description = response.choices[0].message.content;
    return image_description;
  } catch (error) {
    console.error("Error generating image prompt:", error);
    throw error;
  }
}

export async function generateImage(image_description: string) {

  try {
    const response = await openai.images.generate({
      prompt: image_description,
      n: 1,
      size: "256x256",
    });
    //const data = await response.json();
    const image_url = response.data[0].url;
    return image_url as string;
  } catch (error) {
    console.error(error);
  }

  
}
