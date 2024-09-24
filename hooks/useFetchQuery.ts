import { useQuery } from "@tanstack/react-query";

const endPoint = "http://api.quotable.io/quotes";

export function useFetchQuery(path: string) {
  return useQuery({
    queryKey: [path],
    queryFn: async () => {
      await wait(1);
      return fetch(endPoint + path).then((res) => res.json());
    },
  });
}

function wait (duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration*1000);
  });
}