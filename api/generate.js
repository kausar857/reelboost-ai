export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  // Simple AI-style generator logic (you can upgrade later with OpenAI)
  const hook = `🔥 Hook: Start your reel with a strong attention grabber about "${prompt}"`;
  
  const script = `
1. Intro (0-3s): Grab attention instantly
2. Problem (3-7s): Show what users relate to
3. Solution (7-20s): Explain using "${prompt}"
4. CTA (last 3s): Ask viewers to follow/like
`;

  const caption = `Create viral reels about ${prompt} 🚀 Stay consistent and hook viewers in the first 3 seconds!`;

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
