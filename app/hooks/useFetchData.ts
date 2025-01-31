import useApiRoute from "./useApiRoute";

export default async function useFetchData<T>(
  url: string,
  locale: string,
  revalidate: number = 600
): Promise<T | null> {
  try {
    const apiUrl = useApiRoute(url, locale);
    const res = await fetch(apiUrl, {
      // next: {
      //   revalidate,
      // },
      cache: "no-cache",
    });

    if (!res.ok) {
      console.error(`API call failed - "${url}"`, res);
      return null;
    }

    return (await res.json()) as T;
  } catch (error) {
    console.error(`Error fetching data from "${url}":`, error);
    return null;
  }
}
