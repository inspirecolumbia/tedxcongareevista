// api/youtube-latest.js
export default async function handler(req, res) {
  try {
    // ✅ Replace with your channel ID once you have it:
    // You can find it in YouTube Studio > Settings > Channel > Advanced settings
    const CHANNEL_ID = process.env.YT_CHANNEL_ID;

    if (!CHANNEL_ID) {
      return res.status(500).json({ videos: [], error: "Missing YT_CHANNEL_ID env var" });
    }

    // RSS feed (no YouTube API key)
    const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
    const xml = await fetch(feedUrl).then(r => r.text());

    // Minimal XML parsing without dependencies
    const entryRegex = /<entry>[\s\S]*?<\/entry>/g;
    const entries = xml.match(entryRegex) || [];

    const take = entries.slice(0, 12).map((e) => {
      const id = (e.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1] || "").trim();
      const title = (e.match(/<title>([\s\S]*?)<\/title>/)?.[1] || "").trim();
      const url = `https://www.youtube.com/watch?v=${id}`;
      const thumbnail = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
      return { id, title, url, thumbnail };
    }).filter(v => v.id);

    res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=3600");
    return res.status(200).json({ videos: take });
  } catch (err) {
    return res.status(200).json({ videos: [] });
  }
}