import useApiRoute from "./useApiRoute";

export default async function useFetchData<T>(
  url: string,
  locale: string,
  revalidate: number = 600
) {
  const res = await fetch(useApiRoute(url, locale), {
    // next: {
    //   revalidate,
    // },
    cache: "no-cache",
  });
  if (!res.ok) {
    console.log(`Api call - "${url}"`, res);
    throw new Error(`Failed to fetch data from "${url}"`);
  }

  return fetch(useApiRoute(url, locale), {
    // next: {
    //   revalidate,
    // },
    cache: "no-cache",
  }).then((res) => res.json()) as T;
}
