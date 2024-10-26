export default function useApiRoute(path: string, locale: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return `${baseUrl}/${locale}/api/v1${path}`;
}
