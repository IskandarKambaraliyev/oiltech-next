import useApiRoute from "./useApiRoute";

export default async function useFetchData<T>(
  url: string,
  locale: string,
  revalidate: number = 600
) {
  return fetch(useApiRoute(url, locale), {
    next: {
      revalidate,
    },
  }).then((res) => res.json()) as T;
}
