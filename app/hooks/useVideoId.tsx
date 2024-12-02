export default function useVideoId(url: string | null) {
  if (!url) return null;

  try {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|embed)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Invalid URL provided:", error);
    return null;
  }
}
