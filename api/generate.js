export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({
      message: "API is working 🚀 Use POST to generate reels"
    });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const hook = `🔥 Hook: Start your reel with a strong attention grabber about "${prompt}"`;

  const script = `
1. Intro (0–3s): Grab attention instantly
2. Problem (3–7s): Show relatable issue
3. Solution (7–20s): Explain "${prompt}"
4. CTA (last 3s): Ask viewers to follow
`;

  const caption = `Create viral reels about ${prompt} 🚀 Stay consistent and hook viewers in first 3 seconds!`;

  const hashtags = [
    "#reels",
    "#viral",
    "#instagramreels",
    "#contentcreator",
    "#growth",
    "#trending"
  ];

  return res.status(200).json({
    prompt,
    hook,
    script,
    caption,
    hashtags
  });
}
