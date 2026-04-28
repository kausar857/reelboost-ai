export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { topic } = req.body;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.AI_INTEGRATIONS_OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Give 3 viral reel hooks for: ${topic}`
        }
      ]
    })
  });

  const data = await response.json();

  res.status(200).json({
    result: data.choices?.[0]?.message?.content || "Error"
  });
}
