import useSWR from "swr"

export const dataFetchUseSwr = ({ endPath }) => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, mutate } = useSWR(
        `${process.env.BASE_API_URL + endPath}`,
        fetcher,
        {
            fallbackData: null,
            revalidateOnMount: true,
        }
    )

    return { data, mutate }
}